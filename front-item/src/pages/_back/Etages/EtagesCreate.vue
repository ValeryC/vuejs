<template>
  <div>
    <h2>Créer un étage</h2>
    <div class="form">
      <div class="input">
        <input name="resource_name" type="text" v-model="resource_name">
        <label for="resource_name">Nom</label>
      </div>
      <div class="input">
        <input name="resource_level" type="number" v-model="resource_level">
        <label for="resource_level">Niveau</label>
      </div>
      <div class="btn" @click="createResource" v-show="!is_loading">Valider</div>
      <div v-show="is_loading">
        <rotate-square2></rotate-square2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'etages-create',
    data() {
      return {
        is_loading: false,
        resource_name: null,
        resource_level: 0
      }
    },
    methods: {
      createResource() {
        if (this.resource_name) {
          this.is_loading = true
          this.$http.post(process.env.VUE_APP_API_HOST + '/geodis/etage/create', {
            name: this.resource_name,
            level: this.resource_level
          }).then((response) => {
            console.log(response)
            this.is_loading = false
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "etages.sass"
</style>