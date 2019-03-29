<template>
  <div class="entrepot-container">
    <div class="entrepot-wrapper">
      <ul class="etages">
        <li v-for="etage in entrepot.etages" @click="etage_visible = etage.name">{{etage.name}}</li>
      </ul>
      <div class="entrepot">
        <div if="entrepot" v-for="etage in entrepot.etages" class="etage" :class="{'visible': etage_visible == etage.name}">
          <div v-for="zone in etage.zones" class="zone">
            <div v-for="allee in zone.allees" class="allee">
              <div v-for="side in allee.sides" class="side" :class="{'right-side': side.is_right, 'left-side': !side.is_right}">
                <div v-for="place in side.places" class="place"></div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user1",
    data() {
      return {
        entrepot: false,
        etage_visible: false
      };
    },
    mounted() {
      this.$http.get(process.env.VUE_APP_API_HOST + '/db-to-entrepot')
        .then((response) => {
          console.log(response.data)
          this.entrepot = response.data
          this.etage_visible = this.entrepot.etages[0].name
        })
    },
    methods: {
      
    },
  };
</script>

<style lang="scss" scoped>
  @import "user.sass";
</style>