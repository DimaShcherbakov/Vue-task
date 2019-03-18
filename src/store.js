import Vue from 'vue';
import Vuex from 'vuex';
import state from './controller/state';
import mutations from './controller/mutations';
import actions from './controller/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions
})