<template>
  <div class="card-user col l3">
    <div class="user-card">
      <div class="user-settings">
        <div class="status" :class="[{ 'background-green': user['status']}, { 'background-yellow': !user['status']}]"></div>
        <div class="options-container">
          <div class="options"></div>
        </div>
      </div>
      <div class="user-content" :class="{opacity: !user['status']}">
        <div :class="user['userAvatar']"> </div>
        <div class="user-name">
          Utilisateur {{user["userNumber"]}}
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cardUser',
    components: {
    },
    props: {
      user: Object
    },
    data() {
      return {

      }
    },
    mounted() {
    },
    methods: {
     
    }
  }
</script>

<style lang="scss" scoped>
  @import "card_user.sass"
</style>