import axios from "axios";
import config from "../config";
import { userManager } from "./authentication";

async function defaultRequestInterceptor(config) {
  // token relations
  const user = await userManager.getUser();
  const token = user.access_token;
  const tokenType = user.token_type;
  config.headers["Authorization"] = `${tokenType} ${token}`;

  return config;
}

function defaultResponseInterceptor(response) {
  const resp = response.data;
  if (resp.code != 200) throw resp;
  return resp;
}

function createTransport(baseURL, timeout = 1 * 60 * 1000) {
  const instance = axios.create({
    baseURL,
    timeout,
  });

  instance.interceptors.request.use(defaultRequestInterceptor, (err) => {
    throw err;
  });
  instance.interceptors.response.use(defaultResponseInterceptor, (err) => {
    throw err;
  });

  return instance;
}

function createTransportPool() {
  const transportPool = {};
  const services = config.SERVICES;
  const serviceNames = Object.keys(services);
  for (const serviceName of serviceNames) {
    transportPool[serviceName] = createTransport(services[serviceName]);
  }
  return transportPool;
}

export default createTransportPool();
