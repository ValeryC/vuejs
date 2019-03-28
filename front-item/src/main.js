import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Router from './router'
import Store from './store'

Vue.use(VueResource)

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router: Router,
  store: Store,
  render: h => h(App)
})
