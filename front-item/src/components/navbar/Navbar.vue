<template>
  <div class="navbar">
    <div class="top-navbar">
      <div class="logo-brand"></div>
      <div @click="disconnect =!disconnect" class="profil">
        <div class="name">Marie François</div>
        <div class="avatar"></div>
        <div class="disconnect" v-show="disconnect">
          <router-link to="/login">
            <div class="container-disconnect">
              Déconnexion
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bottom-navbar">
      <div class="navigation">
        <ul>
          <li :class="{'active': onglet == 'generale'}" @click="onglet = 'generale'">
            <router-link to="/">
              <div class="text">Vue Générale</div>
            </router-link>
          </li>
          <li :class="{'active': onglet == 'user-1'}" @click="onglet = 'user-1'">
            <router-link :to="{name: 'user1'}">
              <div class="text">Utilisateur 01</div>
            </router-link>
          </li>
          <li :class="{'active': onglet == 'user-2'}" @click="onglet = 'user-2'">
            <router-link to="/">
              <div class="text">Utilisateur 02</div>
            </router-link>
          </li>
          <li :class="{'active': onglet == 'user-3'}" @click="onglet = 'user-3'">
            <router-link to="/">
              <div class="text">Utilisateur 03</div>
            </router-link>
          </li>
          <li :class="{'active': onglet == 'user-4'}" @click="onglet = 'user-4'">
            <router-link to="/">
              <div class="text">Utilisateur 04</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="pictos-container">
        <ul>
          <li :class="{'active': onglet == 'charts'}" @click="onglet = 'charts'">
            <router-link to="/charts">
              <div class="text charts"></div>
            </router-link>
          </li>
          <li :class="{'active': onglet == 'settings'}" @click="onglet = 'settings'">
            <router-link to="/settings">
              <div class="text settings"></div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'grid',
    mounted() {
      this.currentPath()
    },
    data() {
      return {
        disconnect: false,
        onglet: ''
      }
    },
    methods: {
      currentPath() {
        let current_path = this.$router.history.current['path']
        let that = this
        this.$router.options.routes.forEach(function(route) {
          if (route['path'] == current_path) {
            that.onglet = route['onglet']
          }
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "navbar.sass"
</style>