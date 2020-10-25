<template>
  <div id="app">
    <Navbar />
    <b-container>
      <b-row>
        <CartList />
        <b-col>
          <div class="jumbotron">
              <h1>Basket</h1>
              <p class="lead">Your purchase</p>
              <hr class="my-4">
              <p>Total: ${{ total.price }}</p>
              <ul >
                <li v-for="product in shoppingList" :key="product.id">
                  <h3>{{ product.name }}</h3>
                  <p>${{ product.price }}<span> x{{quantity[product.id]}}</span></p>
                  <button @click="removeToTotal(product)">-</button>
                </li>
              </ul>
              <a class="btn btn-warning btn-lg text-white w-100" href="#" role="button">Buy</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar'
import CartList from '@/components/CartList'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar,
    CartList
  },
  computed: mapGetters(['total', 'shoppingList', 'quantity']),
  methods: {
    removeToTotal (product) {
      this.$store.commit('removeToTotal', product)
    }
  }

}
</script>
