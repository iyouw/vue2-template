import { userManager } from "@/utils/authentication";

export function yuardBeforeEach(router) {
  router.beforeEach(async () => {
    const user = await userManager.getUser();
    if (!user) userManager.signinRedirect();
  });
}
