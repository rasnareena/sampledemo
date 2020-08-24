import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { faBell } from '@fortawesome/free-solid-svg-icons';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { EChartOption } from 'echarts';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 BarsMenuIcon = faBars;
 faEllipsisVIcon = faEllipsisV;
 faBellIcon = faBell;
 faCircleIcon = faCircle;
 faShareAltIcon = faShareAlt;
 faFilterIcon = faFilter;
 faHeartbeatIcon = faHeartbeat;
 faCalendarIcon = faCalendar;
 faDownloadIcon = faDownload;
 faArrowLeftIcon = faArrowLeft;
 faArrowRightIcon = faArrowRight;




  constructor(private appService:AppService){

  }

    ngOnInit(){
     
    }

}
