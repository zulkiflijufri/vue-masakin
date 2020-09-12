<template>
  <div class="container">
    <div>
      <b-navbar toggleable="lg">
        <b-navbar-brand href="#">Kuliner</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item router-link to="/">Home</b-nav-item>
            <b-nav-item router-link to="/foods">Foods</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item router-link to="/keranjang">
              Keranjang
              <b-icon-bag-check></b-icon-bag-check>&nbsp;
              <b-badge variant="info">0</b-badge>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>