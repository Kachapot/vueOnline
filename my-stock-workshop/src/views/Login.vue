<template>
  <v-container v-if="!$store.state.isLogged">
    <div class="mt-16 hidden-sm-and-down">
    </div>
    <v-row class="justify-center">
      <v-card style="width:400px">
        <div class="white--text align-end colorRoyal" style="height:200px">
          <v-card-title primary-title >
            Login
          </v-card-title>
        </div>
        <v-card-text>
          <v-form>
            <v-text-field
              type="text"
              name="username"
              label="Username"
              id="username"
              v-model="account.username"
            ></v-text-field>
            <v-text-field
              name="password"
              label="Password"
              id="password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
              counter
              v-model="account.password"
            ></v-text-field>
            <!-- px is padding, pg is margin -->
            <v-row class="justify-space-between px-3 pt-5"> 
              <v-btn text @click.prevent="$router.push('/register')">Register</v-btn>
              <v-btn class="colorRoyal" dark @click="$store.state.isLogged = !$store.state.isLogged,submit()" >Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      account:{
        username:"",
        password:""
      },
      isShowPassword:false
    }
  },
  methods: {
    submit(){
      this.$router.push("/stock")
      this.$store.dispatch({
        type:"doLogin",
        username: this.account.username,
        password: this.account.password
      })
    }
  },
};
</script>

<style></style>
