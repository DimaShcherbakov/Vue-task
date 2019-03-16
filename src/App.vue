<template>
  <div id="app" class="container">
    <Page404></Page404>
    <Header v-bind:title="title"/>
    <Table />
    <Pagination />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Table from './components/Table.vue';
  import Pagination from './components/Pagination.vue';
  import Page404 from './components/Page404.vue';

  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'app',
    computed: {
      results() {
        return this.$store.state.dataArr;
      },
      countPages() {
        return this.$store.state.countPages;
      },
    },
    data(){
      return {
        title: "Coins statistics",
      }
    },
    methods: {...mapActions(['getDataAction'])},
    created() {
      this.$store.dispatch('getDataAction');
    },
    components: {
      Header,
      Table,
      Pagination,
      Page404,
    }
  }
</script>

