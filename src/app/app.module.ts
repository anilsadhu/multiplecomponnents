import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './india/india.component';
import { USAComponent } from './usa/usa.component';
import { NewDelhiComponent } from './new-delhi/new-delhi.component';
import { NewMumbaiComponent } from './new-mumbai/new-mumbai.component';
import { NewYorkComponent } from './new-york/new-york.component';
import { WashingtonComponent } from './washington/washington.component';
import { WankhedeStadiumComponent } from './wankhede-stadium/wankhede-stadium.component';
import { SunilgavaskarStadiumComponent } from './sunilgavaskar-stadium/sunilgavaskar-stadium.component';
import { NcicStadiumComponent } from './ncic-stadium/ncic-stadium.component';
import { NewyorkStadiumComponent } from './newyork-stadium/newyork-stadium.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    USAComponent,
    NewDelhiComponent,
    NewMumbaiComponent,
    NewYorkComponent,
    WashingtonComponent,
    WankhedeStadiumComponent,
    SunilgavaskarStadiumComponent,
    NcicStadiumComponent,
    NewyorkStadiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
