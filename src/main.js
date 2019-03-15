import Vue from 'vue';
import App from './App.vue';
import VueRouter from '../node_modules/vue-router';
import CoinPage from './components/CoinPage.vue';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/home', component: App},
    { path: '/coins/:id', component: CoinPage}
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
