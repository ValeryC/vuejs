<template>
  <div>
    <h2>Liste des étages</h2>
    <table>
      <thead>
        <tr>
          <td>Description</td>
          <td colspan="2">Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr class="resource" v-for="resource in resources">
          <td class="description">Étage {{resource.level}} [{{resource.name}}]</td>
          <td class="btn edit">Modifier</td>
          <td class="btn delete" @click="askDelete(resource)">Supprimer</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'etages-list',
    data() {
      return {
        resources: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.$http.get(process.env.VUE_APP_API_HOST + '/geodis/etages')
          .then((response) => {
            this.resources = response.data
          })
      },
      askDelete(r) {
        console.log(r)
        this.$snotify.confirm(' ', ' ', {
          showProgressBar: true,
          pauseOnHover: false,
          position: 'centerTop',
          html: '<div>bonjour</div>'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "etages.sass"
</style>