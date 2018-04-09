<template>
  <div class="new">
    <h1>New Product</h1>
    <ProductForm @save-product="addProduct" :model="model" :manufacturers="manufacturers"  />
  </div>
</template>
<script>
import ProductForm from "../ProductForm";
export default {
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: "sam",
          name: "Samsung"
        },
        {
          _id: "apple",
          name: "Apple"
        }
      ]
    };
  },
  methods: {
    addProduct(model) {
      console.log("model", model);
    }
  },
  components: {
    ProductForm
  }
};
</script>
