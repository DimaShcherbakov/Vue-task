import { Line, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})
  },
  // watch: {
  //   data: function() {
  //     this._chart.destroy();
  //     console.log(this.ChartData);
  //     console.log(this.options);
  //     this.renderChart(this.ChartData, this.options)
  //   }
  // }
}