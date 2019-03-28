<template>
  <div id="app">
    <Grid></Grid>
    <router-view/>
  </div>
</template>

<script>
  import Grid from '@/components/grid/Grid.vue'
  export default {
    name: 'app',
    components: {
      Grid
    }
  }
</script>

<style lang="scss">
  @import "app.sass"
</style>