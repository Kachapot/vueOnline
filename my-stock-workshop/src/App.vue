<template>
<v-app>
  <Header v-if="$store.state.isLogged"/>
  <Menu v-if="$store.state.isLogged"/>
  <Content/>
</v-app>
  
</template>

<script>
import Header from "@/components/core/Header"
import Menu from "@/components/core/Menu"
import Content from "@/components/core/Content"

export default {
  name:"App",
  components:{
    Header,
    Menu,
    Content
  },
  mounted() {
    this.$store.dispatch({ type: "restoreLogin"});
  },

}
</script>

<style>
.colorRoyal{
  background: rgb(20,30,48);
  background: linear-gradient(120deg, rgba(20,30,48,1) 35%, rgba(36,59,85,1) 100%);
}
.colorMoonlit{
  background: rgb(15,32,39);
background: linear-gradient(120deg, rgba(15,32,39,1) 30%, rgba(32,58,67,1) 65%, rgba(44,83,100,1) 100%);
}
</style>