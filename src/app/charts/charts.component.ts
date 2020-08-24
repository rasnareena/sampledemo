import { Component, OnInit } from '@angular/core';

import { EChartOption } from 'echarts';

import { AppService } from '../app.service';//------service to fetch data from JSON



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  
  chartOption: EChartOption = {};

  constructor(private appService: AppService) { }

  ngOnInit(): void { 
  
   this.appService.chartData.map((p)=>{   

      this.chartOption = {xAxis: p.xAxis,yAxis : p.yAxis, series : p.series};
   });

  }

}
