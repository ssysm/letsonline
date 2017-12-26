import { Component, OnInit } from '@angular/core';
import {StatusService} from "../http/status.service";
import {LineSeriesComponent} from '@swimlane/ngx-charts/release/line-chart';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  loadChart = false;

  constructor(
    private statusService:StatusService
  ) {

  }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Response in ms.';

  // line, area
  autoScale = true;
  timeline = true;
  legend = true;

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.statusService.getChartData(7)
      .map(res => res.json())
      .subscribe(data=>{
        Object.assign(this,{data});
      })
  }

  toggleGraph(){
    console.log(this);
    this.loadChart = true;
  }

}
