import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import VeeValidate from "vee-validate";
import Vuetify from "vuetify";

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
