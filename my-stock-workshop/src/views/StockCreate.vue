<template>
   <v-container>
     <v-row class="justify-center">
       <v-col cols="8">
     <v-card class="mx-auto pa-5" outline>
       <v-form @submit.prevent="submit">
         <v-text-field v-model="product.name" :counter="10" label="Name" required></v-text-field>
         <v-text-field v-model="product.price" suffix="THB" type="number" label="Price" required></v-text-field>
         <v-text-field v-model="product.stock" suffix="PCS" type="number" label="Stock" required></v-text-field>
         <input @change="onFileSelected" type="file" name="" id="" />
            <br />
            <v-img
              v-if="imageURL"
              :src="imageURL"
              height="200"
              width="200"
              class="mt-3"
            ></v-img>
            <br />
            <br />
            <v-row>
              <v-spacer></v-spacer>
              <v-btn class="mr-4" @click="cancel">
                Cancel
              </v-btn>

              <v-btn color="colorRoyal" type="submit" dark>
                Confirm
              </v-btn>
            </v-row>
       </v-form>
     </v-card>
       </v-col>
     </v-row>
    </v-container>
</template>

<script>
export default {
  name: "stock-create",
  data:() => ({
    product: {
      name: "",
      price: "",
      stock: "",
      image: null
    },
    imageURL: null
  }),
  methods: {
    cancel(){
      this.$router.back();
    },
    onFileSelected(event){
      const reader = new FileReader();
      reader.onload = event => {
        this.imageURL = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.product.image = event.target.files[0];
    },
    submit(){
      alert(JSON.stringify(this.product))
    }
  }
}
</script>

<style>

</style>