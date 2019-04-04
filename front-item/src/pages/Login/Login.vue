<template>
  <div id="login" class="padding-grid">
    <div class="grid">
      <div class="row">
        <div class="col l4 offset-l4">
          <div class="container-welcome">
            <div class="welcome">Authentification</div>
          </div>
        </div>
      </div>
      <div class="row">
  
        <div class="col l4 offset-l4">
          <div class="login-form">
            <form>
              <div class="content">
                <div class="input-line">
                  <input type="text" name="email" placeholder="User Name or Email" v-model="email" v-on:keyup.enter="onSubmit">
                  <div v-show="isEmailValid()" class="picto-mail"></div>
                </div>
                <div class="input-line">
                  <input type="password" name="password" placeholder="Password" v-model="password" v-on:keyup.enter="onSubmit">
                  <div v-show="isPasswordValid()" class="picto-lock"></div>
                </div>
              </div>
              <div class="action-buttons">
                <footer>
                  <router-link :to="{name: 'home'}">
                    <div class="btn-submit" @click="onSubmit" :keyup.enter="onSubmit">Connexion</div>
                  </router-link>
                </footer>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from "@/components/grid/Grid.vue";
  export default {
    name: "login",
    components: {
      Grid
    },
    data() {
      return {
        email: null,
        regMail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        password: null,
        word: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/
        // must contains one digit from 0-9
        // must contains one lowercase characters
        // must contains at least one special character
        // match anything with previous condition checking
        // length at least 6 characters and maximum of 20 
  
  
      };
    },
    methods: {
      isPasswordValid() {
        return (this.password == "") ? false : (this.word.test(this.password)) ? false : true
      },
      isEmailValid() {
        return (this.email == "") ? false : (this.regMail.test(this.email)) ? true : false
      },
      onSubmit() {
        // you should call API method to log user here
        // simple auth test
        let user = this.$store.getters.checkUser(this.email, this.password);
        if (this.$store.getters.checkUser(this.email, this.password)) {
          this.$store.commit("setUser", user);
          // this.$router.push('/location')
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./login.sass";
</style>