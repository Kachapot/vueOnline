<template>
   <v-container>
     <!-- summery section -->
      <v-row class="hidden-sm-and-down">
        <v-col lg=3 md="6" sm="12" cols="12">
           <v-card>
               <StockCard title="TOTAL" subtitle="1,800" avatar_bg="colorRoyal" avatar_ic="mdi-cart-outline" /> 
            </v-card>
        </v-col>

       <v-col lg=3 md="6" sm="12" cols="12">
           <v-card>
               <StockCard title="SOLD-OUT" subtitle="12" avatar_ic="mdi-flask-empty-outline" avatar_bg="#f39c12" />
            </v-card>
        </v-col>

        <v-col lg=3 md="6" sm="12" cols="12">
           <v-card>
                <StockCard title="RETURN" avatar_ic="mdi-keyboard-return" avatar_bg="#dd4b39" subtitle="2"/>
            </v-card>
        </v-col>

        <v-col lg=3 md="6" sm="12" cols="12">
           <v-card>
               <StockCard title="DISCOUNT" avatar_ic="mdi-gift-outline" avatar_bg="#00c0ef" subtitle="101"/>
            </v-card>
        </v-col>
      </v-row>
      <!-- Table section -->
      <v-card>
          <v-data-table
            :headers="[{text:'FirstName',value:'firstname'},{text:'LastName',value:'lastname'}]"
            :items="[{firstname: 'lek',lastname: '123'},{firstname: 'kan',lastname: '555'}]"
          >
            
          </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
import StockCard from "@/components/cards/Stockcard"
import Axios from "axios"
export default {
  name:"Stock",
  data(){
    return {
      mDataArray:[]
    }
  },
  components:{
    StockCard
  },
  mounted() {
    console.log("Stock component is run")
    Axios.get("http://localhost:8081/api/v2/product").then(result=>{
      console.log(JSON.stringify(result.data))
      this.mDataArray = result.data
    })
  },
}
</script>

<style>

</style>