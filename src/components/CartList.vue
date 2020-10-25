<template>
  <b-col md="9" class="mt-5">
    <b-row class="d-flex justify-content-center justify-content-sm-start row-cols-1 row-cols-sm-2 row-cols-lg-4">
        <CartListItem
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </b-row>
  </b-col>
</template>

<script>
import CartListItem from '@/components/CartListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  computed: mapGetters(['products'])
}
</script>
