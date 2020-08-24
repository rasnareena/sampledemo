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

  //----Status Icon toggle ----
  isNormalHeart:boolean = true;
  isActiveHeart:boolean = false;
  isRoundHeart:boolean = false;
  isInActiveHeart:boolean = false;

  //----Share Icon toggle ----
  isNormalShare:boolean = true;
  isActiveShare:boolean = false;
  isRoundShare:boolean = false;
  isInActiveShare:boolean = false;

  //----Filter Icon toggle ----
  isNormalFilter:boolean = true;
  isActiveFilter:boolean = false;
  isRoundFilter:boolean = false;
  isInActiveFilter:boolean = false;


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
  toggleHeart(state:string){
  	if(state == 'active'){
  		this.isNormalHeart = false;
  		this.isActiveHeart = true;
  		this.isRoundHeart = false;
  		this.isInActiveHeart = false;
  	}
  	else if(state == 'round'){
  		this.isNormalHeart = false;
  		this.isActiveHeart = false;
  		this.isRoundHeart = true;
  		this.isInActiveHeart = false;
  	}
  		else if(state == 'inactive'){
  		this.isNormalHeart = false;
  		this.isActiveHeart = false;
  		this.isRoundHeart = false;
  		this.isInActiveHeart = true;
  	}else if(state == 'normal'){
  		this.isNormalHeart = true;
  		this.isActiveHeart = false;
  		this.isRoundHeart = false;
  		this.isInActiveHeart = false;
  	}
  	
  }

  //--Share icon toggle method
  toggleShare(state:string){
  	if(state == 'active'){
  		this.isNormalShare = false;
  		this.isActiveShare = true;
  		this.isRoundShare = false;
  		this.isInActiveShare = false;
  	}
  	else if(state == 'round'){
  		this.isNormalShare = false;
  		this.isActiveShare = false;
  		this.isRoundShare = true;
  		this.isInActiveShare = false;
  	}
  		else if(state == 'inactive'){
  		this.isNormalShare = false;
  		this.isActiveShare = false;
  		this.isRoundShare = false;
  		this.isInActiveShare = true;

  	}else if(state == 'normal'){
  		this.isNormalShare = true;
  		this.isActiveShare = false;
  		this.isRoundShare = false;
  		this.isInActiveShare = false;
  	}
  	
  }

  //--Filter icon toggle method
  toggleFilter(state:string){
  	if(state == 'active'){
  		this.isNormalFilter = false;
  		this.isActiveFilter = true;
  		this.isRoundFilter = false;
  		this.isInActiveFilter = false;
  	}
  	else if(state == 'round'){
  		this.isNormalFilter = false;
  		this.isActiveFilter = false;
  		this.isRoundFilter = true;
  		this.isInActiveFilter = false;
  	}
  		else if(state == 'inactive'){
  		this.isNormalFilter = false;
  		this.isActiveFilter = false;
  		this.isRoundFilter = false;
  		this.isInActiveFilter = true;
  		
  	}else if(state == 'normal'){
  		this.isNormalFilter = true;
  		this.isActiveFilter = false;
  		this.isRoundFilter = false;
  		this.isInActiveFilter = false;
  	}
  	
  }

}
