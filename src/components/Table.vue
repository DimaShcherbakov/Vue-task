<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Symbol</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in results" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.symbol }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'Table',
    computed: {
      results() {
        return this.$store.state.pageRows;
      },
    }
  }
</script>