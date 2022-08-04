import { userManager } from "@/utils/authentication";

const KEY_LAST_LOCATION = "LAST_ROUTE_PATH";

export function yuardBeforeEach(router) {
  router.beforeEach(async (to, from, next) => {
    if (window.location.search.indexOf("code") !== -1) {
      try {
        await userManager.signinRedirectCallback();
        window.location.href = localStorage.getItem(KEY_LAST_LOCATION);
      } catch {}
    } else {
      const user = await userManager.getUser();
      if (!user) {
        localStorage.setItem(KEY_LAST_LOCATION, window.location.href);
        userManager.signinRedirect();
      } else {
        next();
      }
    }
  });
}
