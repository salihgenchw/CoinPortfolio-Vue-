import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue();

Vue.config.productionTip = false;

Vue.use(require("vue-moment"));

new Vue({
  render: (h) => h(App),
}).$mount("#app");
