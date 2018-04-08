<template>
  <div class="home">
    <HelloWorld />
    <Cart/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Cart from './Cart';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Cart
  }
};
</script>
