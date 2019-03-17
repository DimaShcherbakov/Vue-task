<template>
  <div class="small">
    <line-chart :chart-data="datasetsfull"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    computed: {
      datasetsfull() {
        return {
          labels: this.$store.state.chartData.date,
          datasets: [
            {
              label: 'Data USD',
              backgroundColor: 'black',
              data: this.$store.state.chartData.usd
            },
             {
              label: 'Data EUR',
              backgroundColor: 'red',
              data: this.$store.state.chartData.eur
            },
             {
              label: 'Data AED',
              backgroundColor: 'green',
              data: this.$store.state.chartData.aed
            },
          ]
        }
      }
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
    },
  }
</script>

<style>
  .small {
    max-width: 600px;
  }
</style>