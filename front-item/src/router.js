import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home.vue'
import Login from './pages/Login/Login.vue'
import Settings from './pages/Settings/Settings.vue'
import Charts from './pages/Charts/Charts.vue'
import User from './pages/User/User.vue'


Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      onglet: 'generale'
    },
    {
      path: '/about',
      name: 'about',
      component: User,
      onglet: 'about'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      onglet: 'settings'
    },
    {
      path: '/charts',
      name: 'charts',
      component: Charts,
      onglet: 'charts'
    },
    
  ]
})
function requireAuth(to, from, next) {
  if (store.getters.getUserLogin) {
    next()
  } else {
    next('/login')
  }
}
