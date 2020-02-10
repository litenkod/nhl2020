import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-stats-chart',
  templateUrl: './stats-chart.component.html',
  styleUrls: ['./stats-chart.component.scss']
})
export class StatsChartComponent implements OnInit {

  @Input() playerStats$: any[];
  @Input() playerPos$: string;

  public options: any = {
    // chart: {
    //   type: 'basic'
    // },
    title: {
      text: ''
    },
    xAxis: {
        title: {
          text: 'Season'
        }
    },
    yAxis: {
      title: {
          text: ''
      }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            }
        }
    },
  }

  constructor() { }

  ngOnInit() {

    console.log('this.playerPos$ :', this.playerPos$);
    console.log('playerStats :', this.playerStats$);

    let prevSeason = null;
    let chartOptionsSeries = [];
    let playerStatsData = [];
    let seriesStats = [];
    let xAxisArray = [];

    if(this.playerPos$ === 'G'){
      seriesStats = ['Games', 'Wins', 'Losses', 'OT'];
    } else {
      seriesStats = ['Games', 'Goals', 'Assists', 'Points'];
    }

    for (let i = 0; i < seriesStats.length; i++) {
      const item = seriesStats[i];
      chartOptionsSeries.push({name: item, data: []})
      playerStatsData.push([]);
    }
  
    this.playerStats$.forEach(row => {
      for (let i = 0; i < seriesStats.length; i++) {
        let objectKey = seriesStats[i].toLowerCase();
        if (row.season === prevSeason) {
          this.mergeSeasons(playerStatsData[i], row.stat[objectKey])
        } else {
          playerStatsData[i].push(row.stat[objectKey]);
        }
      }

      var year = row.season.slice(4, 8);
      row.season !== prevSeason ? xAxisArray.push(year) : null;
      prevSeason = row.season;
    });

    this.options.series = chartOptionsSeries;
    for (let i = 0; i < playerStatsData.length; i++) {
      this.options.series[i]['data'] = playerStatsData[i];
      this.options.xAxis = {
        categories: xAxisArray
      }
    }
    Highcharts.chart('chart', this.options);
  }

  mergeSeasons(array, data) {
    var mergeValue = parseInt(array[array.length  -1]) + parseInt(data);
    array[array.length  -1] = mergeValue;
  }

}
