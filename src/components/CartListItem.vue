<template>
  <b-card
    style="max-width: 20rem"
    class="mb-2 h-25"
  >
    <b-card-img :src="product.image" :alt="product.name"></b-card-img>
    <b-card-title>{{ product.name }}</b-card-title>
    <b-card-text>{{ product.description }}</b-card-text>
    <div class="d-flex flex-row align-items-center justify-content-between">
        <p class="mb-0">${{ product.price }}</p>
        <b-button href="#" variant="success" @click="addToTotal">ADD</b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    product: Object
  },
  methods: {
    addToTotal () {
      this.$store.commit('addToTotal', this.product)
    }
  }
}
</script>

<style scoped>
img {
    max-height: 150px;
    object-fit: contain;
}

.card-text {
    height: 50px;
    display: block;
}
</style>
