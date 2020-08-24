import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
//import { TabSystemModule } from './tabsystem/tabsystem.module';
import { TabsystemComponent } from './tabsystem/tabsystem.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Routes, RouterModule } from '@angular/router';
import { AppService } from './app.service';

//---------------Font awesome------------//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//---------------------------------------//

//---------------ngx-echarts-------------//
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
//---------------------------------------//

//------------------ngx-bootstrap--------//
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabAComponent } from './tabsystem/tabA/tabA.component';
import { TabBComponent } from './tabsystem/tabB/tabB.component';
import { TabCComponent } from './tabsystem/tabC/tabC.component';
import { ChartsComponent } from './charts/charts.component';

//---------------------------------------//
const routes: Routes = [
   {path:'',redirectTo:'/tab1',  pathMatch: 'full'},
   {path:'tab1',component:TabAComponent},
   {path:'tab2',component:TabBComponent},
   {path:'tab3',component:TabCComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsystemComponent,
    ToolbarComponent,
    TabAComponent,
    TabBComponent,
    TabCComponent,
    ChartsComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxEchartsModule.forRoot({
     echarts,
   }),
   TabsModule.forRoot(),
   BsDropdownModule.forRoot(),
   RouterModule.forRoot(routes),
   ButtonsModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
