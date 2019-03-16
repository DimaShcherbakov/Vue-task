import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import CoinPage from './components/CoinPage.vue';
import Page404 from './components/Page404.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/coins/:id',
      name: 'coins',
      component: CoinPage
    },
    {
      path: '/error',
      name: 'Error',
      component: Page404
    },
  ]
})