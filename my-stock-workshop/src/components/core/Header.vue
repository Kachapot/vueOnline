<template>
  <div>
    <v-app-bar app dense dark class="colorRoyal">
      <v-app-bar-nav-icon @click="$store.state.menuStatus = !$store.state.menuStatus"></v-app-bar-nav-icon>

      <v-toolbar-title>CMPOS Workshop V{{ version }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <span>{{ $store.state.username }}</span>
          <v-btn icon @click="onClickLogOff">
             <v-icon dark>mdi-export</v-icon>
          </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name:"Header",
  computed:{
    version(){
      return "1.0"
    }
  },
  methods: {
    onClickLogOff(){
      this.$router.push("/")
      this.$store.dispatch('doLogout')
      this.$store.state.menuStatus=false
    },
    
  },
};
</script>

<style></style>
