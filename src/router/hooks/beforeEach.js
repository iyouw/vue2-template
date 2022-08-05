import { userManager } from "@/utils/authentication";

const KEY_RETURN_URL_WHEN_SIGNIN_REDIRECT = "RETURN_URL_WHEN_SIGNIN_REDIRECT";

export function yuardBeforeEach(router) {
  router.beforeEach(async (to, from, next) => {
    const user = await userManager.getUser();
    if (!user) {
      // if it is the signin redirect callback
      if (window.location.search.indexOf("code") !== -1) {
        try {
          await userManager.signinRedirectCallback();
          window.location.href = localStorage.getItem(
            KEY_RETURN_URL_WHEN_SIGNIN_REDIRECT
          );
        } catch {}
      } else {
        localStorage.setItem(
          KEY_RETURN_URL_WHEN_SIGNIN_REDIRECT,
          window.location.href
        );
        userManager.signinRedirect();
      }
    } else {
      next();
    }
  });
}
