import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const LIST_COINS = 'https://api.coingecko.com/api/v3/coins/list';
const COIN_DATA = 'https://api.coingecko.com/api/v3/coins/';

export default new Vuex.Store({
  state: {
    countPages: 0,
    loading: true,
    coinPageLoad: true,
    dataArr: [],
    pageRows: [],
    coinData: {},
    weekData: [],
  },
  mutations: {
    getDataToPage(state, payload){
      let { dataArr, countPages } = payload;
      state.dataArr = dataArr;
      state.countPages= countPages;
      state.loading = false;
    },
    getDataToTable(state, payload) {
      let { lastRowInd, firstRowInd } = payload;
      state.pageRows = [...state.dataArr.slice(firstRowInd, lastRowInd)];
    },
    searchCoin() {

    },
    clearCoinData(state) {
      state.coinData = {};
    },
    getCoinData(state, payload) {
      state.coinData = payload;
    },
    getCoinWeekData(state, payload) {
      state.weekData = payload;
    }
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
    async getCoinDataAction({ commit }, id) {
      const res = await axios.get(COIN_DATA + id);
      const {data} = res;
      const {  image, name, market_data } = data;
      commit('getCoinData', {
        id, 
        image: image.small,
        name: name,
        cost: {
          eur: market_data.current_price.eur.toFixed(5),
          usd: market_data.current_price.usd.toFixed(5),
          aed: market_data.current_price.aed.toFixed(5),
        }
      });
    },
    getDataToTableAction({ commit }, payload) {
      commit('getDataToTable', payload);
    },
    clearData({ commit }) {
      commit('clearCoinData');
    },
    async weekData({ commit }, payload){
      let arrayUrl = [];
      const { week, id } = payload;
      function getCoinData(url) {
        return axios.get(url);
      }
      week.forEach((el) => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}/history?date=${el}`
        arrayUrl.push(url)
      });
      const res = await axios.all([
        getCoinData(arrayUrl[0]),
        getCoinData(arrayUrl[1]),
        getCoinData(arrayUrl[2]),
        getCoinData(arrayUrl[3]),
        getCoinData(arrayUrl[4]),
        getCoinData(arrayUrl[5]),
        getCoinData(arrayUrl[6]),
      ])
      let result = [];
      res.forEach((el, i) => {
        const { data } = el;
        let stat = {
          id,
          date: week[i],
          usd: data.market_data.current_price.usd.toFixed(5),
          eur: data.market_data.current_price.eur.toFixed(5),
          aed: data.market_data.current_price.aed.toFixed(5),
        }
        result.push(stat)
      })
      commit('getCoinWeekData', result);
    }
  }
})
