<template>
  <div id="grid" class="grid padding-grid">
    <div class="grid-row" v-show="showGrid" >
      <div class="grid-s1 grid-l1" v-for="col_grid in 12"><div class="colored"></div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'grid',
    mounted() {
      let that = this
      window.addEventListener('keydown', (e) => {
        that.grid += e.key
        if (that.grid.length >= 4 || e.key == "Backspace") {
          if (that.grid == "grid") {
            that.toggleGrid()
          }
          that.grid = ""
        }
      });
    },
    data() {
      return {
        showGrid: false,
        grid: "",

      }
    },
    methods: {
      toggleGrid() {
        this.showGrid = !this.showGrid
      } 
    }
  }
</script>

<style lang="scss" scoped>
  @import "grid.sass"
</style>