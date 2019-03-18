<template>
  <div>
    <div class="spinner-border" role="status" v-show="loading">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="col-xs-5 col-xs-offset-2">
      <div class="input-group">
        <input type="text" class="form-control" name="x" @input="filter" placeholder="Search term...">
      </div>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Symbol</th>
          <th scope="col">Link to..</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in results" :key=" item.id ">
          <td style="width:  30%">{{ item.id }}</td>
          <td style="width:  30%">{{ item.name }}</td>
          <td style="width:  30%">{{ item.symbol }}</td>
          <td style="width:  10%; text-align: center; ">
            <router-link :to="{ name: 'coins', params: { id: item.id }}"> <i class="fas fa-angle-double-right"></i></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Table',
    computed: {
      results() {
        return this.$store.state.pageRows;
      },

      loading() {
        return this.$store.state.loading;
      }
    },
    methods: {
      ...mapActions([
        'search',
        'getDataToTableAction'
      ]),
      filter({ target }) {
        this.$store.dispatch('search', target.value);
      }
    },
  }
</script>

<style>
  .spinner-border{
    position: fixed;
    top: 50%;
    left: 40%;
  }
</style>
