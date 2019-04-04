<template>
  <div id="home" class="home">
    <div class="row">
      <div class="col l12">
        <div class="container-box">
          <div class="overflow">
            <hero></hero>
            <header-component></header-component>
            <ShoppingCart></ShoppingCart>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header';
  import HeroSection from "@/components/hero/Hero.vue";
  import ShoppingCart from "@/components/shoppingCart/ShoppingCart.vue";
  export default {
    name: "home",
    components: {
        'header-component': Header,
      'hero': HeroSection,
      ShoppingCart
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