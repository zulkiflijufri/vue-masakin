<template>
    <div class="container">
        <Navbar :countOrders="orders" />
        <div v-if="orders.length > 0" class="row mt-5">
            <div class="col-md-8 text-center">
                <h3>
                    Order
                    <strong>Customer</strong>
                    <div>
                        <table class="table table-responsive mt-5">
                            <tr>
                                <th>Food</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Information</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                            <tr v-for="order in orders" :key="order.id">
                                <td>
                                    <img
                                        :src="order.products.gambar"
                                        width="120px"
                                        class="img-rounded"
                                    />
                                </td>
                                <td>{{ order.products.nama }}</td>
                                <td>{{ order.qty }}</td>
                                <td>{{ order.information ? order.information : "-" }}</td>
                                <td>{{ formatCurrency(order.products.harga) }}</td>
                                <td>{{ formatCurrency(order.qty * order.products.harga)}}</td>
                                <td class="text-danger">
                                    <b-icon-trash
                                        style="cursor: pointer"
                                        @click="deleteOrder(order.id)"
                                    ></b-icon-trash>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5" align="right">
                                    <strong>Total Harga</strong>
                                </td>
                                <td align="right">
                                    <strong>{{ formatCurrency(totalPrice )}}</strong>
                                </td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </h3>
            </div>
            <div class="col-md-4">
                <h3 class="text-center mb-5">
                    Data
                    <strong>Customer</strong>
                </h3>
                <b-form-group>
                    <b-form-input
                        id="input-sm"
                        size="sm"
                        placeholder="Customer name"
                        autocomplete="off"
                        v-model="customer.name"
                        @keyup="cekCustomer"
                        style="font-size:16px;"
                    ></b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-form-input
                        id="textarea-no-resize"
                        rows="2"
                        no-resize
                        autocomplete="off"
                        placeholder="Number table"
                        @keyup="cekCustomer"
                        v-model="customer.table"
                    ></b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-button
                        variant="info"
                        class="btn-block"
                        :style="{opacity: btnOpacity, pointerEvents: btnPointerEvents }"
                        @click="checkout"
                    >CHECKOUT</b-button>
                </b-form-group>
            </div>
        </div>
        <div v-else class="row mb-5 mt-5 justify-content-center">
            <div class="col text-center">
                <h4 style="font-style: italic">Order not avaliable</h4>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
    data() {
        return {
            orders: [],
            customer: {
                name: "",
                table: "",
            },
            btnOpacity: "0.4",
            btnPointerEvents: "none",
        };
    },
    components: {
        Navbar,
        Footer,
    },
    methods: {
        cekCustomer() {
            if (this.customer.name !== "" && this.customer.table !== "") {
                this.btnOpacity = "1";
                this.btnPointerEvents = "";
            } else {
                this.btnOpacity = "0.4";
                this.btnPointerEvents = "none";
            }
        },
        formatCurrency(nominal) {
            return nominal.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
            });
        },
        deleteOrder(id) {
            axios
                .delete("/keranjangs/" + id)
                .then(() => {
                    this.$toast.open({
                        type: "error",
                        position: "top",
                        duration: 3000,
                        message: "Food successfully to deleted.",
                    });

                    //  update orders
                    axios.get("/keranjangs").then((res) => {
                        this.orders = res.data;
                    });
                })
                .catch((err) => console.log(err));
        },
        checkout() {
            this.customer.products = this.orders;
            axios
                .post("/pesanans/", this.customer)
                .then(() => {
                    this.$toast.open({
                        type: "success",
                        position: "top",
                        duration: 3000,
                        message: "Checkout successfully.",
                    });

                    this.orders.map((order) => {
                        return axios.delete("/keranjangs/" + order.id);
                    });

                    this.$router.push("/success");
                })
                .catch((err) => console.log(err));
        },
    },
    computed: {
        totalPrice() {
            return this.orders.reduce((item, order) => {
                return item + order.qty * order.products.harga;
            }, 0);
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

<style>
</style>
