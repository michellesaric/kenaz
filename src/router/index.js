import { createRouter, createWebHistory } from "vue-router";
import { useCategoryStore } from "@/stores/CategoryStore";
import HomeView from "../views/HomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import ArticleView from "../views/ArticleView.vue";
import ErrorView from "../views/ErrorView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/article/:id", component: ArticleView },
  {
    path: "/:category",
    component: CategoryView,
  },
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
  if (to.path === "/") {
    const categoryStore = useCategoryStore();
    categoryStore.resetCategory();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;
