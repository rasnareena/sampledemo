import { Injectable } from '@angular/core';
import * as data from '../assets/json/masterData.json';//---JSON file

import { IIconStyle } from './toolbar/IconStyle';

@Injectable()
export class AppService
{
	appData: any = (data as any).default;
	tabData: any = this.appData.tabData;//----Tab Bar data
	dropDownData:any = this.appData.dropDownData;//----Dropdown data
	toolBarData:any = this.appData.toolBarData;//---ToolBar data
	toolBarLabels:any = this.appData.toolBarLabels;//---ToolBar icon labels
	chartData:any = this.appData.chartData;//---Chart data

	//------ToolBar Icon Style--
	IconStyle:IIconStyle[] = [
	  { class:"normalIconStyle",  state:"normal"},
	  { class:"activeIconStyle",  state:"active"},
	  { class:"whiteIconStyle",  state:"round"}, 
	  { class:"inactiveIconStyle",  state:"inactive"}
	 ];

}