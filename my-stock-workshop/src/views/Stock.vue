<template>
  <v-container>
    <!-- summery section -->
    <v-row class="hidden-sm-and-down">
      <v-col lg="3" md="6" sm="12" cols="12">
        <v-card>
          <StockCard
            title="TOTAL"
            subtitle="1,800"
            avatar_bg="colorRoyal"
            avatar_ic="mdi-cart-outline"
          />
        </v-card>
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <v-card>
          <StockCard
            title="SOLD-OUT"
            subtitle="12"
            avatar_ic="mdi-flask-empty-outline"
            avatar_bg="#f39c12"
          />
        </v-card>
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <v-card>
          <StockCard
            title="RETURN"
            avatar_ic="mdi-keyboard-return"
            avatar_bg="#dd4b39"
            subtitle="2"
          />
        </v-card>
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <v-card>
          <StockCard
            title="DISCOUNT"
            avatar_ic="mdi-gift-outline"
            avatar_bg="#00c0ef"
            subtitle="101"
          />
        </v-card>
      </v-col>
    </v-row>
    <!-- Table section -->
    <v-card class=" mt-5">
      <v-data-table :search="search" :headers="header" :items="mDataArray">
       <!-- table top section -->
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Stock</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/stock-create')"
              color="primary"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span class="hidden-sm-and-down">New Product</span>
            </v-btn>
          </v-toolbar>
        </template>

        <!-- table tr sectoin -->
        <template v-slot:item="{ item }">
          <tr>
            <td >{{ item.id }}</td>
            <td>
              <v-img class="hidden-md-and-down"
                :src="item.image | imageUrl"
                lazy-src="http://www.codemobiles.com/biz/images/cm_logo.png?ref=10"
                aspect-ratio="1"
                max-width="50"
                max-height="50"
              ></v-img>
            </td>
            <td max-width="500px">{{ item.name }}</td>
            <td class="align-right">{{ item.price }} ฿</td>
            <td>{{ item.stock }} pcs.</td>
            <td>
                  <v-icon color="mr-2" @click="editItem(item)">
                    edit
                  </v-icon>
               <span class="ma-2"></span>
                <v-icon @click="deleteItem(item)">
                  delete
                </v-icon> 
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import StockCard from "@/components/cards/Stockcard";
import Axios from "axios";
export default {
  name: "Stock",
  data() {
    return {
      search:"",
      mDataArray: [],
      header: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Image", value: "image" },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Action", value: "action" }
      ]
    };
  },
  components: {
    StockCard
  },
  mounted() {
    console.log("Stock component is run");
    Axios.get("http://localhost:8081/api/v2/product").then((res) => {
      console.log(JSON.stringify(res.data));
      this.mDataArray = res.data;
    });
  },
  methods: {
    editItem(item){
      this.$router.push(`/stock-edit/${item.id}`)
    }
  },
};
</script>

<style></style>
