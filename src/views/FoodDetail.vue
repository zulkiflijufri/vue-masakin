<template>
    <div class="container">
        <div class="row mt-5 ml-1">
            <div class="col-md-6">
                <img :src="product.gambar" class="rounded shadow" width="100%" />
            </div>
            <div class="col-md-6">
                <h3 class="text-center">Detail Food</h3>
                <br />
                <h4>Kode: {{ product.kode}}</h4>
                <br />
                <h4>Name: {{ product.nama}}</h4>
                <br />
                <h4>Price: Rp. {{ product.harga }}</h4>
                <br />
                <b-form-group label-cols="4" label-cols-lg="2" label="Qty" label-for="input-sm">
                    <b-form-input id="input-sm" size="sm"></b-form-input>
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
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group>
                    <b-button :to="'/food/'+product.id" variant="info" class="btn-block">
                        ORDER
                    </b-button>
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
            product: [],
        };
    },
    created() {
        axios
            .get("http://localhost:3000/products/" + this.$route.params.id)
            .then((res) => {
                this.product = res.data;
            })
            .catch((err) => console.log(err));
    },
};
</script>
