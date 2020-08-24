import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { AppService } from '../app.service';

import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

import { TabSystemService } from './tabsystem.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabsystem',
  templateUrl: './tabsystem.component.html',
  styleUrls: ['./tabsystem.component.css'],
  providers:[TabSystemService]
})
export class TabsystemComponent implements OnInit, AfterViewInit {
	@ViewChild('tabset') tabset: TabsetComponent;
  	constructor(private appService:AppService , private tabsystemservice: TabSystemService) { }
  	dropDownData:any = this.appService.dropDownData;
  	tabName:string='';
 
 ngAfterViewInit(){
    console.log(this.tabset);
    //Update the Tabset tabs selection
    this.tabsystemservice.sendRouteData().subscribe((e)=>{
    	
    	this.tabName = e;
    	if(this.tabName=='/tab1')
	    {
	    	this.tabset.tabs[0].active = true;
	    }
	    if(this.tabName=='/tab2')
	    {
	    	this.tabset.tabs[1].active = true;
	    }
	    if(this.tabName=='/tab3')
	    {
	    	this.tabset.tabs[2].active = true;
	    }
    });
    
    //
  }

  ngOnInit(): void {
  	
  }

 
  
}
