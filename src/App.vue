<template>
  <div id="app" class="container">
    <Header msg="Welcome to Your Vue.js App"/>
    <Table msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Table from './components/Table.vue';

  export default {
    name: 'app',
    components: {
      Header,
      Table,
    }
  }
</script>

<style>

</style>
