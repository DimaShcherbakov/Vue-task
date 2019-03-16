import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const LIST_COINS = 'https://api.coingecko.com/api/v3/coins/list';

export default new Vuex.Store({
  state: {
    dataArr: [],
    countPages: 0,
    pageRows: [],
    loading: true,
  },
  mutations: {
    getDataToPage(state, payload){
      let { dataArr, countPages } = payload;
      console.log(payload)
      state.dataArr = dataArr;
      state.countPages= countPages;
      state.loading = false;
    },
    getDataToTable(state, payload) {
      let { lastRowInd, firstRowInd } = payload;
      state.pageRows = [...state.dataArr.slice(firstRowInd, lastRowInd)];
    },
  },
  actions: {
    async getDataAction({ commit }) {
      const res = await axios.get(LIST_COINS);
      const {data} = res;
      let countPages = Math.ceil(data.length / 20);
      commit('getDataToPage', {
        dataArr: data,
        countPages
      });
    },
    getDataToTableAction({ commit }, payload) {
      commit('getDataToTable', payload);
    }
  }
})
