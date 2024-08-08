const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    env: {
      tenantId: '',
      clientId: '',
      clientSecret: '',
      username: '',
      password: '',
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
      // Example: on('before:run', () => { /* ... */ });
      return config;
    },
  },
});
