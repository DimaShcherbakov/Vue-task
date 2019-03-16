import Vue from 'vue';
import Router from 'vue-router';
import mainPage from './components/MainPage.vue';
import CoinPage from './components/CoinPage.vue';
import Page404 from './components/Page404.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: mainPage
    },
    {
      path: '/coins/:id',
      name: 'coins',
      component: CoinPage,
    },
    {
      path: '/*',
      name: 'Error',
      component: Page404
    },
  ]
})