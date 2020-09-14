import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";
import VueToast from "vue-toast-notification";
// Import one of available themes
import "vue-toast-notification/dist/theme-default.css";
//import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueToast);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
