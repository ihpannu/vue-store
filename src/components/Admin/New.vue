<template>
  <div class="new">
    <h1>New Product</h1>

    <div>
      <form @submit.prevent >
        <input type="text" v-model="value" v-validate="'required'"  >

      </form>
      <h2>
        {{value}}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "Hello",
      checked: false,
      picked: false
    };
  }
};
</script>
