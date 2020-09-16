<template>
    <div id="app">
        <!-- <Navbar :countOrders="orders" /> -->
        <router-view></router-view>
        <!-- <Footer /> -->
    </div>
</template>

<script>
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            orders: [],
        };
    },
    components: {
        // Navbar,
        // Footer,
    },
    mounted() {
        axios.get("/keranjangs").then((res) => {
            this.orders = res.data;
        });
    },
};
</script>
