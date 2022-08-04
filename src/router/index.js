import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { yuardBeforeEach } from "./hooks/beforeEach";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

yuardBeforeEach(router);

export default router;
