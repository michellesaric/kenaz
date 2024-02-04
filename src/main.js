import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);
app.use(router);
app.use(createPinia()).mount("#app");
