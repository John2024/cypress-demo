import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {

    env: {
      baseUrl: 'https://stg.demoqa.com',
      asd: 'asd',
      logLevel: "ASSERT"
    },

    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
