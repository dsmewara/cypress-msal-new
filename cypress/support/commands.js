import { decode } from 'jsonwebtoken';

// Function to inject tokens
const injectTokens = (tokenResponse) => {
  const environment = 'login.windows.net';
  const idTokenClaims = decode(tokenResponse.id_token);
  const localAccountId = idTokenClaims.oid || idTokenClaims.sid;
  const clientId = Cypress.env('AZURE_CLIENT_ID');
  const realm = Cypress.env('AZURE_TENANT_ID');
  const homeAccountId = `${localAccountId}.${realm}`;

  setSessionToken({
    homeAccountId,
    environment,
    realm,
    idTokenClaims,
    localAccountId,
  });

  setSessionAccessToken({
    homeAccountId,
    environment,
    tokenResponse,
    realm,
    clientId,
  });
};

// Function to set session token
const setSessionToken = ({
  homeAccountId,
  environment,
  realm,
  idTokenClaims,
  localAccountId,
}) => {
  const tokenId = `${homeAccountId}-${environment}-${realm}`;
  const token = {
    authorityType: 'MSSTS',
    homeAccountId,
    environment,
    realm,
    idTokenClaims,
    localAccountId,
    username: idTokenClaims.preferred_username,
    name: idTokenClaims.name,
  };

  sessionStorage.setItem(tokenId, JSON.stringify(token));
};

// Function to set session access token
const setSessionAccessToken = ({
  homeAccountId,
  environment,
  tokenResponse,
  realm,
  clientId,
}) => {
  const now = Math.floor(Date.now() / 1000);
  const accessTokenId = `${homeAccountId}-${environment}-accesstoken-${Cypress.env(
    'AZURE_CLIENT_ID'
  )}-${Cypress.env('AZURE_TENANT_ID')}-${tokenResponse.scope}--`;
  const accessToken = {
    credentialType: 'AccessToken',
    tokenType: 'Bearer',
    homeAccountId,
    secret: tokenResponse.access_token,
    cachedAt: now.toString(),
    expiresOn: (now + tokenResponse.expires_in).toString(),
    extendedExpiresOn: (now + tokenResponse.ext_expires_in).toString(),
    environment,
    target: tokenResponse.scope,
    realm,
    clientId,
  };
  sessionStorage.setItem(accessTokenId, JSON.stringify(accessToken));
};

// Add custom command to Cypress
Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: `https://login.microsoftonline.com/${Cypress.env('AZURE_TENANT_ID')}/oauth2/v2.0/token`,
    form: true,
    body: {
      grant_type: 'password',
      client_id: Cypress.env('AZURE_CLIENT_ID'),
      client_secret: Cypress.env('AZURE_CLIENT_SECRET'),
      scope: 'openid profile email',
      username: Cypress.env('USERNAME'),
      password: Cypress.env('PASSWORD'),
    },
  }).then((response) => {
    if (response.status === 200) {
      injectTokens(response.body);
    } else {
      throw new Error(`Login failed with status ${response.status}`);
    }
  });
});
