import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://apptest.go.ro:9999',
    env: {
      logLevel: "VERBOSE"
    },

    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
