<template>
    <div class="card-product shadow">
        <b-card :img-src="product.gambar">
            <b-card-text>
                {{ product.nama }}
            </b-card-text>
            <b-card-text> Rp. {{ product.harga }} </b-card-text>

            <b-button to="/keranjang" variant="info">
                <b-icon-cart-check></b-icon-cart-check> Tambah ke keranjang
            </b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "CardProduct",
    props: ["product"],
};
</script>
