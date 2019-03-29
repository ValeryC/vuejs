import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home.vue'
import Login from './pages/Login/Login.vue'
import Settings from './pages/Settings/Settings.vue'
import Charts from './pages/Charts/Charts.vue'
import User from './pages/User/User.vue'
import Admin from './pages/_back/_admin.vue'

import Etages from './pages/_back/Etages/Etages.vue'
import EtagesCrud from './pages/_back/Etages/EtagesCrud.vue'
import EtagesList from './pages/_back/Etages/EtagesList.vue'
import EtagesCreate from './pages/_back/Etages/EtagesCreate.vue'
import EtagesEdit from './pages/_back/Etages/EtagesEdit.vue'

import TypesEmplacements from './pages/_back/TypesEmplacements/TypesEmplacements.vue'

Vue.use(Router)

import {RotateSquare2} from 'vue-loading-spinner'
Vue.component('RotateSquare2', RotateSquare2)

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
      path: '/user1',
      name: 'user1',
      component: User,
      onglet: 'user1'
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
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'etages',
          name: 'etages',
          meta: {
            category: 'etages',
          },
          components: {
            default: Etages,
            sidebar: EtagesCrud
          },
          children: [
            {
              path: 'list',
              name: 'etages-list',
              meta: {
                category: 'etages',
              },
              component: EtagesList
            },
            {
              path: 'creer',
              name: 'etages-create',
              meta: {
                category: 'etages',
              },
              component: EtagesCreate
            },
            {
              path: 'modifier',
              name: 'etages-edit',
              meta: {
                category: 'etages',
              },
              component: EtagesEdit
            }
          ]
        },
        {
          path: 'types-emplacements',
          name: 'types-emplacements',
          meta: {
            category: 'types-emplacements',
          },
          component: TypesEmplacements
        }
      ]
    }
  ]
})
function requireAuth(to, from, next) {
  if (store.getters.getUserLogin) {
    next()
  } else {
    next('/login')
  }
}
