<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-7 text-center">
                <h3>
                    List
                    <strong>Orders</strong>
                    <div>
                        <table class="table table-responsive mt-5">
                            <tr>
                                <th>Food</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Information</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                            <tr v-for="order in orders" :key="order.id">
                                <td>
                                    <img
                                        :src="order.products.gambar"
                                        width="200px"
                                        class="img-rounded"
                                    />
                                </td>
                                <td>{{ order.products.nama }}</td>
                                <td>{{ order.qty }}</td>
                                <td>{{ order.information ? order.information : "-" }}</td>
                                <td>{{ order.products.harga }}</td>
                                <td class="text-danger">
                                    <b-icon-trash></b-icon-trash>
                                </td>
                            </tr>
                        </table>
                    </div>
                </h3>
            </div>
            <div class="col-md-5">
                <h3 class="text-center mb-5">
                    Data
                    <strong>Customer</strong>
                </h3>
                <b-form-group label-cols="4" label-cols-lg="2" label="Name" label-for="input-sm">
                    <b-form-input
                        id="input-sm"
                        size="sm"
                        autocomplete="off"
                        v-model="customer.name"
                        @keyup="cekCustomer"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label="No Table"
                    label-for="input-sm"
                >
                    <b-form-textarea
                        id="textarea-no-resize"
                        rows="2"
                        no-resize
                        autocomplete="off"
                        @keyup="cekCustomer"
                        v-model="customer.table"
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group>
                    <b-button
                        variant="info"
                        class="btn-block"
                        :style="{opacity: btnOpacity, pointerEvents: btnPointerEvents }"
                    >CHECKOUT</b-button>
                </b-form-group>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

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
