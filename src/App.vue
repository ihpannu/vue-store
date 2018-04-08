<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/cart">Cart</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  background: #2c3e50;
  a {
    font-size: 1.25rem;
    font-weight: bold;
    color: #ffffff;
    margin: 0 10px;
    &.router-link-exact-active {
      color: #4fd196;
    }
  }
}

h1 {
  font-size: 1.75rem;
  font-weight: bold;
  margin: 0.5rem 0;
}
h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
}
h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.5rem 0;
}
</style>
