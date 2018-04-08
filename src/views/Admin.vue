<template>
  <div class="admin">
    <div class="product">
      <ul>
        <router-link to="/admin">View Product</router-link>
        <router-link to="/admin/new">New Product</router-link>
      </ul>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.admin {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  .product {
    ul {
      display: flex;
      flex-direction: column;
      // background: #43505d;
      a {
        padding: 0.8rem 1.5rem;
        font-weight: bold;
        color: #ffffff;
        background: #2c3e50;
        &.router-link-exact-active {
          color: #4fd196;
        }
      }
    }
  }
  .router-view {
    padding-right: 2rem;
  }
}
</style>
