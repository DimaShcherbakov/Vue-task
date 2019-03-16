import Vue from 'vue';
import App from './App.vue';
import Paginate from 'vuejs-paginate';
import store from './store';
import router from   './routes';

Vue.config.productionTip = false;

Vue.component('paginate', Paginate);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
