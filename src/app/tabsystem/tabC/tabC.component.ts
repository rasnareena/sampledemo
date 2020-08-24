import { Component, OnInit, Output,  EventEmitter } from '@angular/core';

import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

import {Router} from "@angular/router";

import { TabSystemService } from '../tabsystem.service';//---service to update the tab selection on changing the route through link-

import { AppService } from '../../app.service';

@Component({
  selector: 'app-tabC',
  templateUrl: './tabC.component.html',
  styleUrls: ['./tabC.component.css']
})
export class TabCComponent implements OnInit {
  
  url:string;
  constructor(public appService:AppService , private router: Router, private tabsystemservice: TabSystemService) { }

  ngOnInit(): void {
  //------fetch the tab route link
    this.url = this.router.routerState.snapshot.url;   
    this.selectTab();
  }

  selectTab(){
     this.tabsystemservice.updateRouteData(this.url);
   
  }

  gotoTab(){
  	
  	this.router.navigateByUrl('/tab1');
    this.selectTab();
  }
}
