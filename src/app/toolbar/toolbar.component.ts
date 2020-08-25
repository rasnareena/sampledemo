import { Component, OnInit } from '@angular/core';

import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { AppService } from '../app.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

 faShareAltIcon = faShareAlt;
 faFilterIcon = faFilter;
 faHeartbeatIcon = faHeartbeat;
 faCalendarIcon = faCalendar;
 faArrowLeftIcon = faArrowLeft;
 faArrowRightIcon = faArrowRight;
 faCircleIcon = faCircle;

 count = 1;
 label1 = "Sample Event1";
 label2 = "Sample Key Figure1";
 intNum = 1;

//---Status icon---
statusCount:number = 0;
statusClass: string = "normalIconStyle";
statusState:string = "normal";


//---Share icon
shareCount:number = 0;
shareClass:string = "normalIconStyle";
shareState:string = "normal"


//---Filter icon
filterCount:number = 0;
filterClass:string = "normalIconStyle";
filterState:string = "normal"


  constructor(private appService: AppService) { }

  toolBarLabels:any = this.appService.toolBarLabels;

  ngOnInit(): void {  	
  }

  //Right Arrow Method 
  incrementData(){
  	if(this.intNum<23){
  		this.intNum++;
	  	this.count = this.appService.toolBarData[this.intNum-1].id;
	  	this.label1 = this.appService.toolBarData[this.intNum-1].textLabel1;
	  	this.label2 = this.appService.toolBarData[this.intNum-1].textLabel2;
  	}
  	
  }

   //Left Arrow Method 
  decrementData(){
	if(this.intNum>1){
	  	this.intNum--;
	  	this.count = this.appService.toolBarData[this.intNum-1].id;
	  	this.label1 = this.appService.toolBarData[this.intNum-1].textLabel1;
	  	this.label2 = this.appService.toolBarData[this.intNum-1].textLabel2;
  	}

  }


 
  //--Status icon toggle method
  toggleStatus(){
      this.statusCount++; 
      this.statusClass = this.appService.IconStyle[this.statusCount].class;
      this.statusState = this.appService.IconStyle[this.statusCount].state;
      if(this.appService.IconStyle[this.statusCount].state == 'inactive'){
        this.statusCount = -1;
      }
   
    
  }  

  //--Share icon toggle method
  toggleShare(){
  	 this.shareCount++;     
      this.shareClass = this.appService.IconStyle[this.shareCount].class;
      this.shareState = this.appService.IconStyle[this.shareCount].state;
      if(this.appService.IconStyle[this.shareCount].state == 'inactive'){
        this.shareCount = -1;
      }
  	
  }

  //--Filter icon toggle method
  toggleFilter(){
  	 this.filterCount++;     
      this.filterClass = this.appService.IconStyle[this.filterCount].class;
      this.filterState = this.appService.IconStyle[this.filterCount].state;
      if(this.appService.IconStyle[this.filterCount].state == 'inactive'){
        this.filterCount = -1;
      }
  	
  }

}
