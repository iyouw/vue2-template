<template>
  <div></div>
</template>
<script>
import { UserManager } from "oidc-client";
import { KEY_RETURN_URL_WHEN_SIGNIN_REDIRECT } from "../utils/localStorageKeys";
export default {
  async created() {
    try {
      const userManager = new UserManager({ response_mode: "query" });
      await userManager.signinRedirectCallback();
      this.enterPage();
    } catch (e) {
      this.enterPage();
    }
  },
  methods: {
    enterPage() {
      window.location.href = localStorage.getItem(
        KEY_RETURN_URL_WHEN_SIGNIN_REDIRECT
      );
    },
  },
};
</script>
