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
    state.filteredArr = state.dataArr.filter((el) => el.name.match(payload))
    state.countPages = Math.ceil(state.filteredArr.length / 20);
  },
  clearCoinData(state) {
    state.coinData = {};
    state.weekData = [];
  },
  dataNotFound(state) {
    state.error = true;
  },
  getCoinData(state, payload) {
    state.coinData = payload;
    state.error = false;
    state.coinPageLoading = false;
  },
  getCoinWeekData(state, payload) {
    state.weekData = payload.result;
    state.chartData = payload.obj;
    state.coinPageLoading = false;
  }
}