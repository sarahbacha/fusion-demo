import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ToastrModule } from 'ngx-toastr';
import { TreeModule } from 'angular-tree-component';
//import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { GaugeModule } from 'angular-gauge';
import { AgmCoreModule } from 'angular2-google-maps/core';

//import { FileUploaderModule } from '@uniprank/ng2-file-uploader';
//import { NgxGalleryModule } from 'ngx-gallery';

import { CfModule } from 'cedrus-fusion';
import { Themes } from 'cedrus-fusion';
import { Configuration } from 'cedrus-fusion';

import { AppComponent }  from './app.component';

import { CfUiLibraryComponent } from './ui-library/ui-library.component';

import { CfAlertComponent } from 'cedrus-fusion';
import { CfDialogComponent } from 'cedrus-fusion';

import { CfDemoButton1 } from './demos/button/demo.button-1';
import { CfDemoButton2 } from './demos/button/demo.button-2';
import { CfDemoButton3 } from './demos/button/demo.button-3';
import { CfDemoIcon1 } from './demos/icon/demo.icon-1';
import { CfDemoIcon2 } from './demos/icon/demo.icon-2';
import { CfDemoIcon3 } from './demos/icon/demo.icon-3';
import { CfDemoImage1 } from './demos/image/demo.image-1';
import { CfDemoImage2 } from './demos/image/demo.image-2';
import { CfDemoMenu1 } from './demos/menu/demo.menu-1';
import { CfDemoMenu2 } from './demos/menu/demo.menu-2';
import { CfDemoButtonMenu1 } from './demos/button-menu/demo.button-menu-1';
import { CfDemoButtonMenu2 } from './demos/button-menu/demo.button-menu-2';
import { CfDemoInput1 } from './demos/input/demo.input-1';
import { CfDemoInput2 } from './demos/input/demo.input-2';
import { CfDemoInput3 } from './demos/input/demo.input-3';
import { CfDemoSelect1 } from './demos/select/demo.select-1';
import { CfDemoSelect2 } from './demos/select/demo.select-2';
import { CfDemoCheckbox1 } from './demos/checkbox/demo.checkbox-1';
import { CfDemoCheckbox2 } from './demos/checkbox/demo.checkbox-2';
import { CfDemoCheckbox3 } from './demos/checkbox/demo.checkbox-3';
import { CfDemoRadio1 } from './demos/radio/demo.radio-1';
import { CfDemoRadio2 } from './demos/radio/demo.radio-2';
import { CfDemoRadio3 } from './demos/radio/demo.radio-3';
import { CfDemoSwitch1 } from './demos/switch/demo.switch-1';
import { CfDemoSwitch2 } from './demos/switch/demo.switch-2';
import { CfDemoSwitch3 } from './demos/switch/demo.switch-3';
import { CfDemoCard1 } from './demos/card/demo.card-1';
import { CfDemoDatatable1 } from './demos/datatable/demo.datatable-1';
import { CfDemoWeather1 } from './demos/weather/demo.weather-1';
import { CfDemoNews1 } from './demos/news/demo.news-1';
import { CfDemoList1 } from './demos/list/demo.list-1';
import { CfDemoBpmList1 } from './demos/bpm-list/demo.bpm-list-1';
import { CfDemoCustomerList1 } from './demos/customer-list/demo.customer-list-1';
import { CfDemoCore1 } from './demos/core/demo.core-1';
import { CfDemoCore2 } from './demos/core/demo.core-2';
import { CfDemoCore3 } from './demos/core/demo.core-3';
import { CfDemoSendMessage1 } from './demos/send-message/demo.send-message-1';
import { CfDemoForm1 } from './demos/form/demo.form-1';
import { CfDemoTabs1 } from './demos/tabs/demo.tabs-1';
import { CfDemoWizard1 } from './demos/wizard/demo.wizard-1';
import { CfDemoRating1 } from './demos/rating/demo.rating-1';
import { CfDemoTreeview1 } from './demos/treeview/demo.treeview-1';
import { CfDemoFab1 } from './demos/fab/demo.fab-1';
import { CfDemoFab2 } from './demos/fab/demo.fab-2';
import { CfDemoAlerts1 } from './demos/alerts/demo.alerts-1';
import { CfDemoDialog1 } from './demos/dialog/demo.dialog-1';
import { CfDemoBarChart1 } from './demos/bar-chart/demo.bar-chart-1';
import { CfDemoLineChart1 } from './demos/line-chart/demo.line-chart-1';
import { CfDemoAreaChart1 } from './demos/area-chart/demo.area-chart-1';
import { CfDemoPieChart1 } from './demos/pie-chart/demo.pie-chart-1';
import { CfDemoCalendar1 } from './demos/calendar/demo.calendar-1';
import { CfDemoGallery1 } from './demos/gallery/demo.gallery-1';
import { CfDemoToolbar1 } from './demos/toolbar/demo.toolbar-1';
import { CfDemoGauge1 } from './demos/gauge/demo.gauge-1';
import { CfDemoGoogleMaps1 } from './demos/google-maps/demo.google-maps-1';
import { CfDemoFileUploader1 } from './demos/file-uploader/demo.file-uploader-1';
// import { CfDemoSocket1 } from './demos/sockets/demo.socket-1';

import { CedrusDemoLoaderModule } from './assets/cedrus-demo-loader/index';

const DEMOS = [
  CfDemoButton1,
  CfDemoButton2,
  CfDemoButton3,
  CfDemoButtonMenu1,
  CfDemoButtonMenu2,
  CfDemoIcon1,
  CfDemoIcon2,
  CfDemoIcon3,
  CfDemoMenu1,
  CfDemoMenu2,
  CfDemoInput1,
  CfDemoInput2,
  CfDemoInput3,
  CfDemoSelect1,
  CfDemoSelect2,
  CfDemoCheckbox1,
  CfDemoCheckbox2,
  CfDemoCheckbox3,
  CfDemoRadio1,
  CfDemoRadio2,
  CfDemoRadio3,
  CfDemoSwitch1,
  CfDemoSwitch2,
  CfDemoSwitch3,
  CfDemoCard1,
  CfDemoDatatable1,
  CfDemoNews1,
  CfDemoWeather1,
  CfDemoList1,
  CfDemoImage1,
  CfDemoImage2,
  CfDemoBpmList1,
  CfDemoCustomerList1,
  CfDemoCore1,
  CfDemoCore2,
  CfDemoCore3,
  CfDemoSendMessage1,
  // CfDemoSocket1,
  CfDemoDialog1,
  CfDemoForm1,
  CfDemoTabs1,
  CfDemoWizard1,
  CfDemoRating1,
  CfDemoTreeview1,
  CfDemoFab1,
  CfDemoFab2,
  CfDemoAlerts1,
  CfDemoBarChart1,
  CfDemoLineChart1,
  CfDemoAreaChart1,
  CfDemoPieChart1,
  CfDemoCalendar1,
  CfDemoGallery1,
  CfDemoToolbar1,
  CfDemoGauge1,
  CfDemoGoogleMaps1,
  CfDemoFileUploader1
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    CfModule,
    CedrusDemoLoaderModule.forRoot(),
    NgxChartsModule,
    ToastrModule.forRoot(),
    TreeModule,
    NgxDatatableModule,
    GaugeModule.forRoot(),
    AgmCoreModule.forRoot(),
   // FileUploaderModule
    //NgxGalleryModule
  ],
  declarations: [
    AppComponent,
    CfUiLibraryComponent,
    //CalendarComponent,
    ...DEMOS
  ],
  entryComponents: [
    ...DEMOS,
    CfDialogComponent,
    CfAlertComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
