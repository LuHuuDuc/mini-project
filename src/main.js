import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {} from "./assets/global/style.css";

const app = createApp(App);

app.config.globalProperties.$filters = {
  formatCurrent(value) {
    return value.toLocaleString("vi", { style: "currency", currency: "VND" });
  },
};

app.use(router);
app.use(store);
app.mount("#app");
