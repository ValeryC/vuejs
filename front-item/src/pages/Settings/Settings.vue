<template>
  <div id="settings">
    <div class="row">
      <div class="navigation-sidebar col l2">
        <ul>
          <li :class="{'active': onglet == 'missions'}" @click="onglet = 'missions'">Gestions des missions</li>
          <li :class="{'active': onglet == 'user'}" @click="onglet = 'user'">Gestion utilisateurs</li>
          <li :class="{'active': onglet == 'referentiel'}" @click="onglet = 'referentiel'">Données référentiel</li>
        </ul>
      </div>
      <div class="col offset-l1 l7" v-if="onglet == 'missions'">
        <div>missions</div> 
      </div>
      <div class="col offset-l1 l8" v-else-if="onglet == 'user'">
        <div class="row">
          <div class="col l2">
            <h3>Opérationnels</h3>
          </div>
        </div>
        <div class="row users-container">
          <div class="col l3">
            <div class="add-user">
              <div class="background-cross">
                <div class="cross"></div>
              </div>
            </div>
          </div>
          <CardUser v-for="user in userOptions" :user="user"></CardUser>
        </div>
      </div>
      <!-- import container -->
      <div class="col offset-l1 l4" v-if="onglet == 'referentiel'">
        <div class="referentiel-container">
          <div class="left-container">
            <h3>Nouveau Référentiel</h3>
            <div class="drop-zone-import">
              <Referentiel @tabReferentiel="importDrop"></Referentiel>
              <div class="file-to-upload" v-if="!file">
                <div class="upload"></div>
                <div class="legend">Glisser/déposer un fichier ici</div>
                <label for="upload" class="file-upload-label">Choisir un fichier</label>
                <input @change="importClick" ref="fileImport" id="upload" class="file-upload-input" type="file" name="file-upload">
              </div>
              <div v-else>
                <div class="file-name">{{file.name}}</div>
                <div class="btn-import margin-top" @click="sendToBack">
                  Importer le fichier
                </div>
                <div class="btn-import margin-top" @click="removeFiles">
                  Annuler
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col offset-l1 l3" v-if="onglet == 'referentiel'">
        <div class="right-container">
          <div class="categorie-title">Seuil de quantité</div>  
          <input type="text" name="seuilQuantite" v-model="seuilQuantite">
          <div class="categorie-title">Automne / Hiver</div>  
          <input type="text" name="automneHiver" placeholder="AH 18 66" v-model="automneHiver">
          <div class="categorie-title">Printemps / Été</div>
          <input type="text" name="printempsEte" placeholder="PE 19 25" v-model="printempsEte">
          <div class="btn-import btn-referentiel" @click="showVerifyBeforeActivation">
            Activer le Référentiel
          </div>
        </div>
      </div>
      <!-- end of import container -->
    </div>
  </div>
</template>

<script>
  import Referentiel from '@/components/referentiel/Referentiel.vue'
  import CardUser from '@/components/cardUser/CardUser.vue'
  export default {
    name: 'settings',
    components: {
      Referentiel, CardUser
    },
    data() {
      return {
        host: 'http://localhost:3000/geodis/import',
        onglet: 'missions',
        file: false,
        formData: false,
        seuilQuantite: null,
        automneHiver: null,
        printempsEte: null,
        showModal: false,
        userOptions: [{
          userNumber: "01",
          userAvatar: "avatar-user",
          status: true,
        },
        {
          userNumber: "02",
          userAvatar: "avatar-user",
          status: true,
        },
        {
          userNumber: "03",
          userAvatar: "avatar-user",
          status: true,
        },
        {
          userNumber: "04",
          userAvatar: "avatar-user",
          status: true,
        },
        {
          userNumber: "05",
          userAvatar: "avatar-user",
          status: false,
        },
        {
          userNumber: "06",
          userAvatar: "avatar-user",
          status: false,
        }]
      }
    },
    mounted() {
    },
    methods: {
      importClick() {
        let fileToUpload = this.$refs.fileImport.files[0]
        let formData = new FormData();
        formData.append('fileToUpload', fileToUpload)
        this.formData = formData
        this.file = fileToUpload
      },
      importDrop($event) {
        this.formData = $event["formData"]
        this.file = $event["fileToUpload"]
      },
      sendToBack() {
        this.$http.post (this.host, this.formData).then(function (response) {
          if (response.body["verify_import"]) {
            this.formData = false
            this.file = false
            this.$snotify.create({
              title: null,
              body: null,
              config: {
                timeout: 2000,
                position: "centerTop",
                closeOnClick: true,
                html: "<div class='snotify-body'><div class='picto-file'></div><div>Fichier importé avec succès</div></div>",
              }
            })
          } else {

          }
        });
      },
      removeFiles() {
        this.file = false
        this.formData = false
      },
      showVerifyBeforeActivation () {
        this.showModal = true
        this.$emit('showModal', this.showModal)
        this.showModal = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "settings.sass"
</style>