# cypress-msal-new

Project Structure
Your Cypress project should follow this structure:


|-- cypress
|   |-- integration
|   |   |-- authenticated_tests.spec.js  // Your test files
|   |
|   |-- support
|   |   |-- commands.js                  // Cypress custom commands
|-- cypress.env.json                      // Environment variables for Cypress (contains sensitive info)
|-- cypress.json                          // Cypress configuration file
|-- package.json                          // Project dependencies
|-- README.md                             // Documentation
Detailed File Placement
1. Custom Commands: Add login Command to commands.js
Cypress custom commands go inside the cypress/support/commands.js file. This is where you will add your login function that programmatically generates tokens and injects them into session storage.

File: cypress/support/commands.js
Add the following code to define the login command:

javascript
Copy code
Cypress.Commands.add('login', (username, password) => {
  const authority = Cypress.env('authority');
  const clientId = Cypress.env('clientId');
  const clientSecret = Cypress.env('clientSecret');
  const apiScopes = Cypress.env('apiScopes');
  const realm = Cypress.env('realm');
  const environment = Cypress.env('environment');
  const localAccountId = Cypress.env('localAccountId');
  const name = Cypress.env('name');

  let sequence = cy.visit('/');

  // POST call to token endpoint
  sequence = sequence.request({
    url: `${authority}/oauth2/v2.0/token`,
    method: 'POST',
    body: {
      grant_type: 'password',
      client_id: clientId,
      client_secret: clientSecret,
      scope: ["openid profile offline_access"].concat(apiScopes).join(" "),
      username: username,
      password: password,
    },
    form: true,
  });

  // Inject tokens into session storage
  sequence.then((response) => {
    insertSessionStorageTokens(response.body, authority, clientId, realm, environment, localAccountId, name, apiScopes);
  }).reload(); // Reload page for MSAL to detect tokens in session storage
});
2. Helper Functions: Add Token Injection Functions Inside commands.js
You can define the helper functions (such as building access tokens and injecting them into session storage) in the same commands.js file.

Add the following to the same commands.js file:

javascript
Copy code
const buildAccessTokenEntity = (homeAccountId, accessToken, expiresIn, extExpiresIn, realm, apiScopes, clientId, environment) => {
  const now = Math.floor(Date.now() / 1000);
  return {
    homeAccountId,
    credentialType: "AccessToken",
    secret: accessToken,
    cachedAt: now.toString(),
    expiresOn: (now + expiresIn).toString(),
    extendedExpiresOn: (now + extExpiresIn).toString(),
    environment,
    clientId,
    realm,
    target: apiScopes
  };
};

const insertSessionStorageTokens = (tokenResponse, authority, clientId, realm, environment, localAccountId, name, apiScopes) => {
  const homeAccountId = `${localAccountId}.${realm}`;
  const accountKey = `${homeAccountId}-${environment}-${realm}`;
  const accessTokenKey = `${homeAccountId}-${environment}-accesstoken-${clientId}-${realm}-${apiScopes}`;
  const idTokenKey = `${homeAccountId}-${environment}-idtoken-${clientId}-${realm}`;
  const refreshTokenKey = `${homeAccountId}-${environment}-refreshtoken-${clientId}`;

  // Build token entities
  const accessTokenEntity = buildAccessTokenEntity(
    homeAccountId,
    tokenResponse.access_token,
    tokenResponse.expires_in,
    tokenResponse.ext_expires_in,
    realm,
    apiScopes,
    clientId,
    environment
  );

  const idTokenEntity = {
    homeAccountId,
    credentialType: "IdToken",
    secret: tokenResponse.id_token,
    realm,
    environment,
    clientId
  };

  const refreshTokenEntity = {
    homeAccountId,
    credentialType: "RefreshToken",
    secret: tokenResponse.refresh_token,
    environment,
    clientId
  };

  const accountEntity = {
    homeAccountId,
    environment,
    realm,
    localAccountId,
    username: tokenResponse.username,
    name: name
  };

  // Inject into browser's sessionStorage
  sessionStorage.setItem(accountKey, JSON.stringify(accountEntity));
  sessionStorage.setItem(idTokenKey, JSON.stringify(idTokenEntity));
  sessionStorage.setItem(accessTokenKey, JSON.stringify(accessTokenEntity));
  sessionStorage.setItem(refreshTokenKey, JSON.stringify(refreshTokenEntity));
};
3. Environment Variables: Configure Sensitive Data in cypress.env.json
The cypress.env.json file will store all the sensitive information such as client credentials and user details. Make sure to gitignore this file to prevent it from being uploaded to version control.

File: cypress.env.json
Add the following structure:

json
Copy code
{
  "authority": "https://login.microsoftonline.com/your-aad-tenant-id",
  "clientId": "app-client-id",
  "clientSecret": "app-client-secret",
  "apiScopes": "api://api-client-id/adminuiapi.access",
  "username": "user@yourcompany.onmicrosoft.com",
  "password": "password",
  "environment": "login.microsoftonline.com",
  "authorityType": "MSSTS",
  "localAccountId": "current-user's-user-id",
  "name": "name-of-the-user",
  "realm": "your-aad-tenant-id"
}
4. Test File: Add Programmatic Login in Authenticated Tests
In your Cypress test files, you can now use the cy.login() function before executing any test that requires authentication.

File: cypress/integration/authenticated_tests.spec.js
Add the following Cypress test:

javascript
Copy code
describe('Authenticated User Tests', () => {
  beforeEach(() => {
    // Programmatic login using username and password stored in cypress.env.json
    cy.login(Cypress.env('username'), Cypress.env('password'));
  });

  it('verifies the logged-in user can see profile details', () => {
    cy.get('#user-profile').should('contain', 'My Profile');
  });
});
5. GitIgnore: Add .gitignore Entry to Protect Sensitive Files
Ensure that the cypress.env.json file is not included in version control for security reasons.

File: .gitignore
Add this line:

plaintext
Copy code
cypress.env.json
Summary
Custom Commands (cypress/support/commands.js): Add the login function to handle the programmatic authentication and inject tokens into session storage.
Environment Variables (cypress.env.json): Store sensitive information (client IDs, secrets, credentials) in a file that's gitignored.
Test Files (cypress/integration/authenticated_tests.spec.js): Use cy.login() to authenticate before running tests.
This setup ensures that you can perform programmatic authentication in Cypress without interacting with the UI, improving the efficiency and reliability of your tests in applications using Azure Active Directory.
