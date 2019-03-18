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
          ],
          hoverBorderColor: 'green',
          hoverBorderWidth: 3,
        }
      }
    },
  }
</script>

<style>
  .small {
    max-width: 700px;
  }
</style>