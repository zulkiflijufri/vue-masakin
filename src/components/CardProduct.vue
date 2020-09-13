<template>
  <div class="container">
    <div class="card-product shadow">
      <b-card :img-src="product.gambar">
        <b-card-text>{{ product.nama }}</b-card-text>
        <b-card-text>Harga Rp. {{ product.harga }}</b-card-text>

        <b-button to="/keranjang" variant="info">
          <b-icon-cart-check></b-icon-cart-check>&nbsp;Tambah ke keranjang
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>
