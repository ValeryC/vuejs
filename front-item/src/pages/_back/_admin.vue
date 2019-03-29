<template>
  <div id="admin">
    <div class="row">
      <div class="navigation-sidebar col l2">
        <ul>
          <li :class="{'active': $route.meta.category == 'etages'}"><router-link :to="{name: 'etages'}">Étages</router-link></li>
          <li :class="{'active': $route.meta.category == 'types-emplacements'}"><router-link :to="{name: 'types-emplacements'}">Types d'emplacement</router-link></li>
        </ul>
      </div>
      <router-view class="col l2" name="sidebar"></router-view>
      <router-view class="col l5"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'admin',
    components: {},
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  @import "_admin.sass"
</style>