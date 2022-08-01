import config from "./app.js";
import testConfig from "./app.test.js";
import prodConfig from "./app.prod.js";

let appConfig = config;

if (process.env.NODE_ENV === "test") {
  appConfig = Object.assign(appConfig, testConfig);
}

if (process.env.NODE_ENV === "production") {
  appConfig = Object.assign(appConfig, prodConfig);
}

export default appConfig;
