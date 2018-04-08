import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Cart from "./views/Cart.vue";

// Admin children components
import New from "./components/Admin/New";
import Edit from "./components/Admin/Edit";
import Product from "./components/Admin/Product";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      children: [
        {
          path: "/admin/new",
          name: "new",
          component: New
        },
        {
          path: "/admin/edit/:id",
          name: "edit",
          component: Edit
        },
        {
          path: "/admin",
          name: "product",
          component: Product
        }
      ]
    }
  ]
});
