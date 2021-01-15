<template>
   <v-container class="">
      <v-row>
        <v-col lg=3 md="6" sm="12" cols="12">
           <v-card>
               <StockCard title="TOTAL" avatar_ic="mdi-card-outline" avatar_bg="#212121" subtitle="1,000" /> 
            </v-card>
        </v-col>

        <v-col lg=3 md="6" sm="12" cols="12">
           <v-card>
               <h1>x</h1>
            </v-card>
        </v-col>

        <v-col lg=3 md="6" sm="12" cols="12">
           <v-card>
               <h1>x</h1>
            </v-card>
        </v-col>

        <v-col lg=3 md="6" sm="12" cols="12">
           <v-card>
               <h1>x</h1>
            </v-card>
        </v-col>
      </v-row>
      
    </v-container>
</template>

<script>
import StockCard from "@/components/cards/Stockcard"
export default {
  name:"Stock",
  components:{
    StockCard
  }
}
</script>

<style>

</style>