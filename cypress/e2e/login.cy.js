/// <reference types="cypress" />

describe('template spec', () => {
  before(() => {
		cy.login();
	});

  it('should be logged in', () => {
    cy.visit('/');
		cy.contains('Welcome');
		cy.contains('Authenticated');
		cy.contains('Token: ');

    
  })
})

