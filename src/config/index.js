import config from "./app.js";
import testConfig from "./app.test.js";
import prodConfig from "./app.prod.js";
import { Environment } from "../utils/environment.js";

let appConfig = config;

if (Environment.IsTest()) {
  appConfig = Object.assign(appConfig, testConfig);
}

if (Environment.IsProduction()) {
  appConfig = Object.assign(appConfig, prodConfig);
}

export default appConfig;
