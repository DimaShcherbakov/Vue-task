<template>
  <section class="container col-sm-8">
    <div class="spinner-border" role="status" v-show="isLoading">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="row header">
      <router-link to="/" class="link">
        <span>
          <i class="fas fa-angle-double-left"></i>
        </span>
      </router-link>
      <div class="col-sm-4">
        <img :src="data.image" alt="logo coin"/>
      </div>
      <div class="col-sm-7">
        <h2>{{ data.name }}</h2>
      </div>
    </div>
    <div v-if="error">
      <h2>Sorry!! Data not found for last week!!</h2>
      <p>Our team are recomend you to look on the other coins!!</p>
    </div>
    <div v-else>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">USD</th>
            <th scope="col">EUR</th>
            <th scope="col">AED</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in weekData" :key="item.date">
            <th scope="row">{{ item.date }}</th>
            <td>{{ item.usd }}</td>
            <td>{{ item.eur }}</td>
            <td>{{ item.aed }}</td>
          </tr>
        </tbody>
      </table>
      <Chart></Chart>
    </div>
  </section>
</template>

<script>
import Chart from './Chart.vue';
import { mapActions } from 'vuex';
import normalDate from '../utils/normalDate';

export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    data() {
      return this.$store.state.coinData
    },
    week() {
      let array = [
        normalDate(0),
        normalDate(1),
        normalDate(2),
        normalDate(3),
        normalDate(4),
        normalDate(5),
        normalDate(6)
      ];
      return array;
    },
    weekData() {
      return this.$store.state.weekData
    },
    isLoading() {
      return this.$store.state.coinPageLoading
    },
    error() {
      return this.$store.state.error
    }
  },
  methods: {
    ...mapActions([
      'getCoinDataAction',
      'clearData',
      'getWeekData',
    ])
  },
  created() { 
    this.$store.dispatch('getCoinDataAction', this.id);
    this.$store.dispatch('getWeekData', {
      week: this.week,
      id: this.id
    })
  },
  destroyed() {
    this.$store.dispatch('clearData');
  },
  components: {
    Chart,
  }
}
</script>

<style scoped>
  .header{
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .link{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>