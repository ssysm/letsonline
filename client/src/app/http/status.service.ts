import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from "@angular/http";

@Injectable()
export class StatusService {

  constructor(
    private http:Http
  ) { }

  getLatest(){
    return this.http
      .get(environment.apiBase+'/status/latest')
  }

  getHistory(month){
    return this.http
      .get(environment.apiBase+'/status/history?month'+parseInt(month))
  }

  getChartData(day){
    return this.http
      .get(environment.apiBase+'/status/chart/api/'+parseInt(day))
  }
}
