<template>
  <div id="home" class="home">
    <div class="row">
      <div class="col l3">
        <div class="container-box">
          <div class="title-entreprise">Entrepôt kenzo</div>
          <div class="overflow">
            <div class="container-bloc-implantation">
              <div class="container-bloc">
                <li>Pré-implantation</li>
                <div @click="toggle=!toggle" class="chevron rotate" :class="{'down': toggle}"></div>
              </div>
            </div>
            <div class="container-bloc-rotation">
              <div @click="rotate=!rotate" class="container-bloc">
                <li>Rotation</li>
                <div class="chevron rotate" :class="{'down': rotate}"></div>
              </div>
              <Missions v-show="rotate"></Missions>
              <Missions v-show="rotate"></Missions>
              <Missions v-show="rotate"></Missions>
            </div>
            <!-- v for -->
            <div class="container-bloc-doublons">
              <div class="container-bloc">
                <li>Doublons</li>
                <div @click="turn=!turn" class="chevron rotate" :class="{'down': turn}"></div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Missions from "@/components/missions/Missions.vue";
  export default {
    name: "home",
    components: {
      Missions
    },
    methods: {},
    data() {
      return {
        toggle: false,
        rotate: false,
        turn: false
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "home.sass";
</style>