// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// cypress/support/e2e.js

function loginViaAAD(username, password) {
    cy.visit('http://localhost:3000/')
    cy.get('button#signIn').click()
  
    // Login to your AAD tenant.
    cy.origin(
      'login.microsoftonline.com',
      {
        args: {
          username,
        },
      },
      ({ username }) => {
        cy.get('input[type="email"]').type(username, {
          log: false,
        })
        cy.get('input[type="submit"]').click()
      }
    )
  
    // Depending on the user and how they are registered with Microsoft, the origin may go to live.com
    cy.origin(
      'login.live.com',
      {
        args: {
          password,
        },
      },
      ({ password }) => {
        cy.get('input[type="password"]').type(password, {
          log: false,
        })
        // cy.get('input[type="submit"]', { timeout: 10000 }).click()  // Waits up to 10 seconds

        cy.get('#idSIButton9').click()

        cy.get('#acceptButton').click()
      }
    )
  
    cy.wait(100000)
    // Ensure Microsoft has redirected us back to the sample app with our logged in user.
    cy.url().should('equal', 'http://localhost:3000/')
    cy.get('#welcome-div').should(
      'contain',
      `Welcome ${Cypress.env('aad_username')}!`
    )
  }
  
  Cypress.Commands.add('loginToAAD', (username, password) => {
    const log = Cypress.log({
      displayName: 'Azure Active Directory Login',
      message: [`🔐 Authenticating | ${username}`],
      autoEnd: false,
    })
    log.snapshot('before')
  
    loginViaAAD(username, password)
  
    log.snapshot('after')
    log.end()
  })
  