<template>
    <v-navigation-drawer app permanent class="colorRoyal" >
      <div style="margin-top:50px">

      </div>
      <v-list shaped >
        <v-list-item-group v-model="selectedMenu"  color="white">
          <v-list-item v-for="([icon, title, route], i) in menus" :key="i" link @click="menus(route)" dark>
            <v-list-item-icon>
               <v-icon >{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ title }} </v-list-item-title>
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
