<template>
    <div class="container">
        <Navbar />
        <div class="row mt-5 ml-1">
            <div class="col-md-6">
                <img :src="product.gambar" class="rounded shadow" width="100%" />
            </div>
            <div class="col-md-6">
                <h3 class="text-center">Detail Food</h3>
                <br />
                <h4 class="text-center mb-3">Name: {{ product.nama}}</h4>
                <h4 class="text-center">Price: Rp. {{ product.harga }}</h4>
                <br />
                <div class="form-order">
                    <b-form-group
                        label-cols="4"
                        label-cols-lg="2"
                        label="Kode"
                        label-for="input-sm"
                    >
                        <b-form-input id="input-sm" size="sm" disabled :value="product.kode"></b-form-input>
                    </b-form-group>
                    <b-form-group label-cols="4" label-cols-lg="2" label="Qty" label-for="input-sm">
                        <b-form-input
                            id="input-sm"
                            size="sm"
                            autocomplete="off"
                            v-model="order.qty"
                            @keyup="cekQty"
                            type="number"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label-cols="4"
                        label-cols-lg="2"
                        label="Information"
                        label-for="input-sm"
                    >
                        <b-form-textarea
                            id="textarea-no-resize"
                            placeholder="ex: hot, cool, etc"
                            rows="2"
                            no-resize
                            autocomplete="off"
                            v-model="order.information"
                        ></b-form-textarea>
                    </b-form-group>
                    <b-form-group>
                        <b-button
                            :to="'/food/'+product.id"
                            variant="info"
                            class="btn-block"
                            @click="Order"
                            :style="{opacity: btnOpacity, pointerEvents: btnPointerEvents }"
                        >ORDER</b-button>
                    </b-form-group>
                </div>
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
            product: [],
            order: {
                qty: "",
                information: "",
            },
            btnOpacity: "0.4",
            btnPointerEvents: "none",
        };
    },
    components: {
        Navbar,
        Footer
    },
    methods: {
        Order() {
            this.order.products = this.product;
            axios
                .post("/keranjangs/", this.order)
                .then(() => {
                    this.$toast.open({
                        type: "success",
                        position: "top",
                        duration: 3000,
                        message: "Food successfully to order.",
                    });

                    this.$router.push("/orders");
                })
                .catch((err) => console.log(err));
        },
        cekQty() {
            if (this.order.qty !== "" && this.order.qty > 0) {
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
            .get("/products/" + this.$route.params.id)
            .then((res) => {
                this.product = res.data;
            })
            .catch((err) => console.log(err));
    },
};
</script>
