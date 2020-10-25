import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  total: {
    list: [],
    price: 0
  },
  products: [
    {
      id: 1,
      name: 'Iphone',
      price: 899,
      image: require('@/assets/img/iphone.jpg'),
      description: 'The iPhone X is the new smartphone'
    },
    {
      id: 2,
      name: 'Macbook',
      price: 1790,
      image: require('@/assets/img/macbook.jpg'),
      description: 'Best Macbook pro since 2017'
    },
    {
      id: 3,
      name: 'Apple Watch',
      price: 250,
      image: require('@/assets/img/applewatch.jpg'),
      description: 'The best Apple watch ever!!'
    }
  ]
}

export default new Vuex.Store({
  state,
  getters: {
    total: (state) => state.total,
    products: (state) => state.products,
    quantity: (state) => {
      var result = {}
      state.total.list.forEach(function (x) {
        result[x.id] = (result[x.id] || 0) + 1
      })
      return result
    },
    shoppingList: (state) => {
      return state.total.list.filter((item, x) => state.total.list.indexOf(item) === x)
    }
  },
  mutations: {
    addToTotal (state, product) {
      this.commit('addToList', product)
      state.total.price += product.price
    },
    removeToTotal (state, item) {
      this.commit('removeToList', item)
      state.total.price -= item.price
    },

    addToList (state, item) {
      state.total.list.push(item)
    },
    removeToList (state, item) {
      const index = state.total.list.indexOf(item)
      if (index > -1) {
        state.total.list.splice(index, 1)
      }
    }
  },
  actions: {}
})
