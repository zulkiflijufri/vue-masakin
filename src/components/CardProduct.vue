<template>
    <div class="container">
        <div class="card-product shadow">
            <b-card :img-src="product.gambar">
                <b-card-text>{{ product.nama }}</b-card-text>
                <b-card-text>Harga {{ formatCurrency(product.harga) }}</b-card-text>

                <b-button :to="'/food/'+product.id" variant="info">
                    <b-icon-cart-check></b-icon-cart-check>&nbsp;Order
                </b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardProduct",
    props: ["product"],
    methods: {
        formatCurrency(nominal) {
            return nominal.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
            });
        },
    },
};
</script>
