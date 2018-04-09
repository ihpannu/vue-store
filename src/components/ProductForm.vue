<template>

    <v-app class="white" id="inspire" >
    <form >
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field
                v-model="model.name"
                label="Name"
                :counter="10"
                :error-messages="errors.collect('name')"
                v-validate="'required'"
                data-vv-name="name"
                required
              ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 >
            <v-text-field
            type="number"
                v-model="model.price"
                label="Price"
                :error-messages="errors.collect('price')"
                v-validate="'required'"
                data-vv-name="price"
                required
              ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 >
            <v-select
                v-model="model.manufacturers"
                label="Manufacturers"
                item-value="text"
                :error-messages="errors.collect('manufacturers')"
                v-validate="'required'"
                data-vv-name="manufacturers"
                required
                class="input-group--focused"
              >
            <template v-for="manufacturer in manufacturers">
              <option :key="manufacturer" :value="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)"></option>
            </template>
          </v-select>
          </v-flex>

         <v-flex xs12 sm6 >
            <v-text-field
                v-model="image"
                label="Image"
                :error-messages="errors.collect('image')"
                v-validate="'required|url'"
                data-vv-name="image"
                required
                hint="www.example.com/page"
                persistent-hint
              ></v-text-field>
          </v-flex>
         <v-flex  xs12 sm6 >
            <v-text-field
                v-model="description"
                label="Description"
                :error-messages="errors.collect('description')"
                v-validate="'required'"
                data-vv-name="description"
                required
                full-width
                color="teal">
              <div slot="label">
                Bio
              </div>
              ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn class="right btn" >
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
      </v-btn>
    </form>
  </v-app>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },
  props: ["model", "isEditing"],
  data: () => ({
    name: "",
    price: "",
    manufacturers: "",
    image: "",
    description: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    dictionary: {
      custom: {
        name: {
          required: () => "Name can not be empty",
          max: "The name field may not be greater than 10 characters"
          // custom messages
        },
        select: {
          required: "Select field is required"
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    saveProduct() {
      this.$emit("save-product", this.model);
    }
  }
};
</script>
<style lang="scss" scoped>
.btn {
  background: #2c3e50;
  color: #46ac84;
}
</style>
