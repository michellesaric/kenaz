import HomeView from "../views/HomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import ArticleView from "../views/ArticleView.vue";
import ErrorView from "../views/ErrorView.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  { path: "/category", component: CategoryView },
  { path: "/article", component: ArticleView },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorView,
    meta: { hideNavBar: true, hideFooter: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;
