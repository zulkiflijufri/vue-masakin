<template>
  <div class="home">
    <div v-if="products.length > 0" class="container">
      <Hero />
      <div class="row ml-1">
        <div class="col">
          <h2>
            Best
            <strong>Foods</strong>
          </h2>
        </div>
      </div>
      <div class="row mt-1 mb-5">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h4 class="text-center mt-5">Server local off, please actived your server.</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import CardProduct from "../components/CardProduct";
import axios from "axios";

export default {
  //   name: "Home",
  components: {
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/best_products")
      .then((res) => {
        this.products = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
