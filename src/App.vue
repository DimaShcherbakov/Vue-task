<template>
  <div id="app" class="container">
    <cube-spin></cube-spin>
    <Header v-bind:title="title"/>
    <Table v-bind:results="results"/>
    <Pagination v-bind:countResults="countResults"/>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Table from './components/Table.vue';
  import Pagination from './components/Pagination.vue';
  import axios from 'axios';

  export default {
    name: 'app',
    data: () => ({
      results: [],
      countResults: 0,
      title: 'Coins Statistic',
    }),
    created(){
      axios.get('https://api.coingecko.com/api/v3/coins/list')
        .then((res) => {
          const {data} = res;
          this.results = data;
          this.countResults = Math.ceil(data.length / 20);
          console.log(this.countResults)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    components: {
      Header,
      Table,
      Pagination,
    }
  }
</script>

<style>

</style>
