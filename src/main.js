import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Vuex from 'vuex'

import './assets/sass/bootstrap.scss'

import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
