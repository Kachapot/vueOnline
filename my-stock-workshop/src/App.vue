<template>
<v-app>
  <Header v-if="$store.state.isLogged"/>
  <Menu v-if="$store.state.menuStatus"/>
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
  background-image: radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% );
}
.colorMoonlit{
  background: rgb(15,32,39);
background: linear-gradient(120deg, rgba(15,32,39,1) 30%, rgba(32,58,67,1) 65%, rgba(44,83,100,1) 100%);
}
.appcolor{
  background:#e2e2e2;
}
</style>