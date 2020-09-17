import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Foods from "../views/Foods";
import axios from "axios";

Vue.use(VueRouter);

axios.defaults.baseURL = "https://json-server-masakin.herokuapp.com/";

const routes = [
    { path: "/", component: Home },
    { path: "/foods", component: Foods },
    { path: "/food/:id", component: () => import("../views/FoodDetail.vue") },
    { path: "/orders", component: () => import("../views/Orders.vue") },
    { path: "/success", component: () => import("../views/Success.vue") }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
