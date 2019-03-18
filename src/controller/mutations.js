export default {
  getDataToPage(state, payload){
    let { dataArr, countPages } = payload;
    state.dataArr = dataArr;
    state.filteredArr = dataArr;
    state.countPages = countPages;
    state.loading = false;
  },
  getDataToTable(state, payload) {
    let { lastRowInd, firstRowInd } = payload;
    state.pageRows = [...state.filteredArr.slice(firstRowInd, lastRowInd)];
  },
  searchCoin(state, payload) {
    state.filteredArr = state.dataArr.filter((el) => {
      return el.name.match(payload);
    });
    state.countPages = Math.ceil(state.filteredArr.length / 20);
  },
  clearCoinData(state) {
    state.coinData = {
      id:'', 
      image: '',
      name: '',
      cost: {
        eur: '',
        usd: '',
        aed: '',
      }
    };
    console.log(state.coinData)
  },
  dataNotFound(state) {
    state.error = true;
  },
  getCoinData(state, payload) {
    state.coinData = payload;
  },
  getCoinWeekData(state, payload) {
    state.weekData = payload.result;
    state.chartData = payload.obj;
    state.coinPageLoading = false;
  }
}