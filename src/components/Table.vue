<template>
  <div>
    <div class="spinner-border" role="status" v-show="loading">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="col-xs-8 col-xs-offset-2">
      <div class="input-group">
        <input type="text" class="form-control" name="x" @input="filter" placeholder="Search term...">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <i class="fas fa-search"></i>
          </button>
        </span>
      </div>
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
  import { mapActions } from 'vuex';

  export default {
    name: 'Table',
    data() {
      return {
        arrayData:[]
      }
    },
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
