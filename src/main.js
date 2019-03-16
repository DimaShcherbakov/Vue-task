import Vue from 'vue';
import App from './App.vue';
import VueRouter from '../node_modules/vue-router';
import CoinPage from './components/CoinPage.vue';
import Paginate from 'vuejs-paginate';

import store from './store';

Vue.config.productionTip = false;

Vue.component('paginate', Paginate);
// Vue.component('cube-spin', CubeSpin);

const router = new VueRouter({
  routes: [
    { path: '/home', component: App},
    { path: '/coins/:id', component: CoinPage}
  ],
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
