import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import rmf from './rmf.js';

Vue.config.productionTip = false;

let data = {
  products: rmf,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
