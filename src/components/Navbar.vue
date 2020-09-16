<template>
    <div class="container">
        <div>
            <b-navbar toggleable="lg">
                <b-navbar-brand href="#">Masakin</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item router-link to="/" exact>Home</b-nav-item>
                        <b-nav-item router-link to="/foods">Foods</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item router-link to="/orders" @click="cekOrders">
                            Orders
                            <b-icon-bag-check></b-icon-bag-check>&nbsp;
                            <b-badge
                                variant="info"
                            >{{ countOrders ? countOrders.length : orders.length }}</b-badge>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Navbar",
    props: ["countOrders"],
    data() {
        return {
            orders: [],
        };
    },
    methods: {
        cekOrders() {
            if (!this.orders.length > 0) {
                this.$toast.open({
                    type: "warning",
                    position: "top",
                    duration: 3000,
                    message: "Sorry, order not avaliable.",
                });
                // redirect
                this.$router.push("/");
            }
        },
    },
    created() {
        axios
            .get("/keranjangs")
            .then((res) => {
                this.orders = res.data;
            })
            .catch((err) => console.log(err));
    },
};
</script>
