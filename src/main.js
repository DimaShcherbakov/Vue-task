import Vue from 'vue';
import App from './App.vue';
import VueRouter from '../node_modules/vue-router';
import CoinPage from './components/CoinPage.vue';
import Paginate from 'vuejs-paginate';
import { CubeSpin } from 'vue-loading-spinner';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.component('paginate', Paginate);
Vue.component('cube-spin', CubeSpin);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dataArr: [],
  },
  mutations: {
    getDataToTable(state, payload) {
      const { dataArr } = state;
      const { lastRowInd, firstRowInd } = payload;
      dataArr = dataArr.slice(firstRowInd, lastRowInd);
    },
  }
});

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
