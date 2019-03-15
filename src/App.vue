<template>
  <div id="app" class="container">
    <Header />
    <Table v-bind:results="results"/>
    <Pagination />
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
    }),
    created(){
      axios.get('https://api.coingecko.com/api/v3/coins/list')
        .then((res) => {
          this.results = res.data;
          console.log(this.results)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    components: {
      Header,
      Table,
      Pagination
    }
  }
</script>

<style>

</style>
