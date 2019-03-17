<template>
  <div>
    <div class="spinner-border" role="status" v-show="loading">
      <span class="sr-only">Loading...</span>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Symbol</th>
          <th scope="col">Link to..</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in results" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.symbol }}</td>
          <td>
            <router-link :to="{ name: 'coins', params: { id: item.id }}"> <i class="fas fa-angle-double-right"></i></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    computed: {
      results() {
        return this.$store.state.pageRows;
      },
      loading() {
        return this.$store.state.loading;
      }
    }
  }
</script>

<style>
  .spinner-border{
    position: fixed;
    top: 50%;
    left: 40%;
  }
</style>
