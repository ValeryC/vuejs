<template>
  <div class="modal-container">
    <div class="modal-background">
    </div>
    <div class="modal-content">
      <div class="body">
        <div class="text">
          Souhaitez-vous activer <br>
          le nouveau référentiel ?
        </div>
        <div class="btn-container">
          <div class="btn-reverse" @click="closeModal">
            Non
          </div>
          <div class="btn-reverse">
            Oui
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    components: {
    },
    data() {
      return {
        showModal: false
      }
    },
    mounted() {
    },
    methods: {
      closeModal() {
        this.$emit('showModalInModal', this.showModal)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "modal.sass"
</style>