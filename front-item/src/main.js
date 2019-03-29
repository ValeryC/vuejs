import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Router from './router'
import Store from './store'
import Navbar from './components/navbar/Navbar.vue'
import Snotify from 'vue-snotify'

Vue.use(VueResource)
Vue.use(Snotify)

Vue.component('Navbar', Navbar)

Vue.config.productionTip = false

let filters = []

for (let f in filters) {
  Vue.filter(filters[f], (require('./filters/' + filters[f])).default.init)
}

new Vue({
  el: '#app',
  router: Router,
  store: Store,
  render: h => h(App)
})
