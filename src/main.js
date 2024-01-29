import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import CategoryView from "./views/CategoryView.vue";
import ArticleView from "./views/ArticleView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/category", component: CategoryView },
    { path: "/article", component: ArticleView },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
