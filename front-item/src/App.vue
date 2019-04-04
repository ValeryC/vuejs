<template>
  <div id="app">
    <div class="container-grid">
      <Grid></Grid>
    </div>
    <main :class="{ 'blurred': showModal, 'padding-grid': $route.name != 'login'}">
      <navbar v-show="$route.name != 'login'"></navbar>
      <vue-snotify></vue-snotify>
      <router-view @showModal="toggleModal"/>
    </main>
     <!-- <modal @showModalInModal="toggleModal" v-if="showModal"></modal> -->
  </div>
</template>

<script>
  import Grid from "@/components/grid/Grid.vue";
  // import Modal from "@/components/modal/Modal.vue";
  export default {
    name: "app",
    mounted() {

    },
    methods: {

    },
    components: {
      Grid,
      //  Modal
    },
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      toggleModal($event) {
        this.showModal = $event
      },
    }
  };
</script>

<style lang="scss">
  @import "app.sass",
    "@/components/grid/grid.sass",
    "~vue-snotify/styles/material.css"
</style>