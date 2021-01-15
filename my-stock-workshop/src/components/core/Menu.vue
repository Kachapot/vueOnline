<template>
    <v-navigation-drawer app permanent>
      <router-link to="/about" exact >
      <div class="align-center" width="100%" style="height:200px; margin:auto; background:#141E30; color:white; text-decoration:none;border:none ">
        
      </div>
        
      </router-link>
      <v-list shaped>
        <v-list-item-group v-model="selectedMenu"  color="primary">
          <v-list-item v-for="([icon, title, route], i) in menus" :key="i" link @click="menus(route)">
            <v-list-item-icon>
               <v-icon >{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-tile-title>{{ title }} </v-list-tile-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
     selectedMenu:0,
      menus: [
        ['mdi-apps-box','Stock','/stock'],
        ['mdi-chart-areaspline','Report','/report'],
        ['mdi-antenna','About','/about'],
      ],
    };
  },
};
</script>

<style></style>
