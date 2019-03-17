<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    computed: {
      days() {
        return this.$store.state.chartData.date
      },
      usd() {
        return this.$store.state.chartData.usd
      },
      eur() {
        return this.$store.state.chartData.eur
      },
      aed() {
        return this.$store.state.chartData.aed
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: this.days,
          datasets: [
            {
              label: 'Data USD',
              backgroundColor: 'black',
              data: this.usd
            },
             {
              label: 'Data EUR',
              backgroundColor: 'red',
              data: this.eur
            },
             {
              label: 'Data AED',
              backgroundColor: 'green',
              data: this.aed
            },
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
  }
</style>