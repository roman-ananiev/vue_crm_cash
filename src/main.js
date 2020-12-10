import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min";
import dateFilter from "@/filters/date.filter.js";

Vue.filter("dateFilter", dateFilter);
Vue.config.productionTip = false;
Vue.component("EmptyLayout", require("@/layouts/EmptyLayout.vue"));
Vue.component("MainLayout", require("@/layouts/MainLayout.vue"));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
