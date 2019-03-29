<template>
  <div id="referentiel">
    <VueFullScreenFileDrop @drop='onDrop' :text="'Importer le fichier'">
    </VueFullScreenFileDrop>
  </div>
</template>

<script>
import VueFullScreenFileDrop from 'vue-full-screen-file-drop'
  export default {
    name: 'referentiel',
    components: {
      VueFullScreenFileDrop
    },
    props: {
    },
    data() {
    return {
        host: 'http://localhost:3000/geodis/import',
      }
    },
    mounted() {
    },
    methods: {
      onDrop(formData, files) {
        let fileToUpload = files[0]
        formData.append('fileToUpload', fileToUpload)
        this.$emit('tabReferentiel', {
          formData: formData,
          fileToUpload: fileToUpload
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "referentiel.sass"
</style>