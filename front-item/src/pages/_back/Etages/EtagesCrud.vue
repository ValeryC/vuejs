<template>
  <div class="navigation-sidebar">
    <!--<ul>
      <li :class="{'active': $route.name == 'etages'}"><router-link :to="{name: 'etages'}">Étages</router-link></li>
      <li :class="{'active': $route.name == 'types-emplacements'}"><router-link :to="{name: 'types-emplacements'}">Type d'emplacement</router-link></li>
    </ul>-->
    <ul>
      <li :class="{'active': $route.name == 'etages-list'}"><router-link :to="{name: 'etages-list'}">Liste</router-link></li>
      <li :class="{'active': $route.name == 'etages-create'}"><router-link :to="{name: 'etages-create'}">Créer</router-link></li>
      <li :class="{'active': $route.name == 'etages-edit'}"><router-link :to="{name: 'etages-edit'}">Modifier</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'etages-crud',
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "etages.sass"
</style>