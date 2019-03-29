<template>
  <div id="missions">
    <div class="container-missions">
      <div class="missions">Mission 01</div>
      <div class="circle-point"></div>
      <div class="print-logo"></div>
      <div @click="toggle =!toggle" class="chevron rotate" :class="{'down': toggle}"></div>
    </div>
    <div v-show="toggle" class="container_assign_stat">
      <ul class="container-assign">
        <li v-for="(value, index) in values" :key="index">
          {{values[index][0]}}
          <div class="arrow_right"></div>
          {{values[index][1]}}
        </li>
      </ul>
      <div class="stat_mission">
        <span class="stat-text">Statut de la mission : </span>
        <div class="container-radio">
          <div class="container-radio-todo">
            <div class="md-radio md-radio-inline">
              <input id="1" type="radio" name="g2" class="radio_warning" checked>
              <label for="1">À faire</label>
            </div>
          </div>
          <div class="container-radio-done">
            <div class="md-radio md-radio-inline">
              <input id="2" type="radio" name="g2">
              <label for="2">Effectuée</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "missions",
    components: {},
    data() {
      return {
        toggle: true,
        values: [
          ["100 001 03", "256 963 526"],
          ["100 001 03", "256 963 526"],
          ["100 001 03", "256 963 526"],
          ["100 001 03", "256 963 526"],
          ["100 001 03", "256 963 526"]
        ],
      }
    },
    //methods:{
    //  showMission(){
    //    isActive==isActive
    //  }
    // }
  }
</script>

<style lang="scss" scoped>
  @import "missions.sass";
</style>