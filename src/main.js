import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { useCategoryStore } from "./stores/CategoryStore";

const app = createApp(App);
app.use(router);
app.use(createPinia()).mount("#app");
const categoryStore = useCategoryStore();
categoryStore.loadNewsDataFromLocalStorage();
