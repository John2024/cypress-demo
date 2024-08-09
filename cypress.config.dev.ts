import { defineConfig } from "cypress";
import baseConfig from "./cypress.config"
import dotenv from 'dotenv'; 

if(process.env.NODE_ENV) {
    dotenv.config({
    path: `${__dirname}/.env.${process.env.NODE_ENV}`
  })
} else {
  dotenv.config()
}

const e2eOverride = {
    baseUrl: process.env.BASE_URL,
}
const envOverride = {
    // MY_USER: process.env.MY_QA_USERNAME,
    // MY_PASSWORD: process.env.MY_QA_PASSWORD,
}

export default defineConfig({
    ...baseConfig,
    e2e: {  
        ...baseConfig.e2e,
        ...e2eOverride
    },
  });