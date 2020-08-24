import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { TabSystemService } from '../tabsystem.service';//---service to update the tab selection on changing the route through link-
import { AppService } from '../../app.service';

@Component({
  selector: 'app-tabA',
  templateUrl: './tabA.component.html',
  styleUrls: ['./tabA.component.css']
})
export class TabAComponent implements OnInit {

  url:string='';
  constructor(public appService:AppService , private router: Router ,  private tabsystemservice: TabSystemService) { }

  ngOnInit(): void {
  	//------fetch the tab route link
  	this.url = this.router.routerState.snapshot.url;
  	this.tabsystemservice.updateRouteData(this.url);
  
  }

}
