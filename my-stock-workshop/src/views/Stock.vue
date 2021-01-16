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
      <v-data-table :headers="header" :items="mDataArray">
        <template v-slot:item="{ item }">
          <tr>
            <td v-if="false">{{ item.id }}</td>
            <td>
              <v-img class="hidden-md-and-down"
                :src="item.image | imageUrl"
                lazy-src="http://www.codemobiles.com/biz/images/cm_logo.png?ref=10"
                aspect-ratio="1"
                max-width="50"
                max-height="50"
              ></v-img>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.stock }} pcs.</td>
            <td>XX</td>
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
  }
};
</script>

<style></style>
