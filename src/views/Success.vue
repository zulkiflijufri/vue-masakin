<template>
    <div class="container">
        <Navbar />
        <div class="row justify-content-center mb-5 mt-5">
            <div class="col text-center">
                <img src="../assets/img/success.png" width="65%" class="mb-5">
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
    components: {
        Navbar,
        Footer
    }
};
</script>

<style>
</style>
