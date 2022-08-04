import config from "../config";
import { UserManager } from "oidc-client";

export const userManager = new UserManager(config.AUTHENTICATION);
