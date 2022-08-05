import { userManager } from "@/utils/authentication";
import { KEY_RETURN_URL_WHEN_SIGNIN_REDIRECT } from "../../utils/localStorageKeys";

export function yuardBeforeEach(router) {
  router.beforeEach(async (to, from, next) => {
    const user = await userManager.getUser();
    if (!user) {
      localStorage.setItem(
        KEY_RETURN_URL_WHEN_SIGNIN_REDIRECT,
        window.location.href
      );
      userManager.signinRedirect();
    } else {
      next();
    }
  });
}
