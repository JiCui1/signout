import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import AxiosPlugin from "vue-axios-cors";

Vue.use(AxiosPlugin);

Vue.config.productionTip = false;

// global cart item store
const store = Vue.observable({
  cart: {
    items: [],
    add(item) {
      store.cart.items.push(item);
    },
    remove(item) {
      // store.cart.items = store.cart.items.filter((cartItem) => {
      //   cartItem.itemId != item.itemId;
      // });
      let index;
      for (let i = 0; i < store.cart.items.length; i++) {
        if (store.cart.items[i].itemId == item.itemId) {
          index = i;
        }
      }
      store.cart.items.splice(index, 1);
    },
  },
});

Vue.prototype.$store = store;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
