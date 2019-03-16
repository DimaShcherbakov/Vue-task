<template>
  <div>
    <Header v-bind:title="title"/>
    <Table />
    <Pagination />
  </div>
</template>

<script>
  import Table from './Table.vue';
  import Pagination from './Pagination.vue';
  import Header from './Header.vue';
  import { mapActions } from 'vuex';

  export default {
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
      }
    }
</script>