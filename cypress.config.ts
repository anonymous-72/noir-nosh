import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    env: {
      apiUrl: 'http//localhost:3000/api',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
