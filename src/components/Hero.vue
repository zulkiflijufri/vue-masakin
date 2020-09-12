<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 d-flex">
        <div class="justify-content-center align-self-center">
          <h2>
            <strong>Nikmati Menu Makanan</strong>
            <br />hanya dengan sekali klik
          </h2>
          <p class="mt-3" style="font-size:20px;">Pesan segera makanan favorit Kamu</p>
          <b-button variant="info" class="btn-pesan" to="/foods">Pesan</b-button>
        </div>
      </div>
      <div class="col-md-6 mt-5">
        <img src="../assets/img/food.png" alt="Hero" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>