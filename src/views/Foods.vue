<template>
    <div class="container">
        <div class="row ml-1 mt-5">
            <div class="col-md-6">
                <h2>
                    List
                    <strong>Foods</strong>
                </h2>
            </div>
            <div class="col-md-6 mt-1">
                <b-input-group class="mb-2">
                    <b-input
                        placeholder="Search menu foods"
                        autocomplete="off"
                        v-model="search"
                        @keyup="searchFood"
                    ></b-input>
                </b-input-group>
            </div>
        </div>
        <div v-if="products.length > 0" class="row mt-4">
            <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
                <CardProduct :product="product" />
            </div>
        </div>
        <div v-else>
            <h3 class="text-center mt-5">
                Foods
                <strong>Not Found</strong>
            </h3>
        </div>
    </div>
</template>

<script>
import CardProduct from "../components/CardProduct";
import axios from "axios";

export default {
    name: "Foods",
    components: {
        CardProduct,
    },
    data() {
        return {
            products: [],
            search: "",
        };
    },
    methods: {
        searchFood() {
            axios
                .get("http://localhost:3000/products?q=" + this.search)
                .then((res) => {
                    this.products = res.data;
                })
                .catch((err) => console.log(err));
        },
    },
    created() {
        axios
            .get("http://localhost:3000/products")
            .then((res) => {
                this.products = res.data;
            })
            .catch((err) => console.log(err));
    },
};
</script>