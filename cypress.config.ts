import { defineConfig } from "cypress";
import dotenv from 'dotenv';

if(process.env.NODE_ENV) {
    dotenv.config({
    path: `${__dirname}/.env.${process.env.NODE_ENV}`
  })
} else {
  dotenv.config()
}


export default defineConfig({
  e2e: {
    
    baseUrl: process.env.BASE_URL,

    env: {
      logLevel: "VERBOSE",
    },

    watchForFileChanges: false,
    setupNodeEvents(on, config) {

    },
  },
});
