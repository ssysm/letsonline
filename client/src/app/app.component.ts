import {Component, OnInit} from '@angular/core';
import {StatusService} from "./http/status.service";
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private statusService: StatusService,
  ){}
  responsesPool:any;
  downNumber: number;
  totalServer:number;
  reqTime: Date;

  ngOnInit(){
    this.initTable();
  }

  initTable(){
    this.statusService.getLatest()
      .subscribe(data=>{
        this.responsesPool = data.json().response[0].requestPool;
        this.totalServer = this.responsesPool.length;
        this.downNumber = this.responsesPool.filter(function(fil){return fil.response.statusCode<=200});
        this.reqTime = new Date(data.json().response[0].date);
      });
  }

}
