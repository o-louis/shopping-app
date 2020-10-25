<template>
  <b-navbar class="bg-danger d-flex flex-row justify-content-between" toggleable="lg" type="dark" variant="info">
    <b-container>
        <b-navbar-brand href="#">Trezure</b-navbar-brand>
        <b-nav>
            <b-nav-item active>Shop</b-nav-item>
            <b-nav-item>Basket</b-nav-item>
        </b-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style>
.nav-link { color: white; }
</style>
