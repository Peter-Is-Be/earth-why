import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {Ebe1RoutingModule} from "./ebe1-routing.module";
import {Ebe1IndexComponent} from "./ebe1-index/ebe1-index.component";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {LayoutModule} from "@angular/cdk/layout";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { Ch03Component } from './chapt/ch03/ch03.component';
import { Ch04Component } from './chapt/ch04/ch04.component';
import { Ch05Component } from './chapt/ch05/ch05.component';
import { Ch06Component } from './chapt/ch06/ch06.component';
import { Ch07Component } from './chapt/ch07/ch07.component';
import { Ch08Component } from './chapt/ch08/ch08.component';
import { Ch09Component } from './chapt/ch09/ch09.component';
import { Ch10Component } from './chapt/ch10/ch10.component';
import { Ch11Component } from './chapt/ch11/ch11.component';
import { Ch12Component } from './chapt/ch12/ch12.component';
import { Ch13Component } from './chapt/ch13/ch13.component';
import { Ch14Component } from './chapt/ch14/ch14.component';
import { Ch15Component } from './chapt/ch15/ch15.component';
import { Ch16Component } from './chapt/ch16/ch16.component';
import { Ch17Component } from './chapt/ch17/ch17.component';
import { Ch18Component } from './chapt/ch18/ch18.component';
@NgModule({
  declarations: [Ebe1IndexComponent, Ch03Component, Ch04Component, Ch05Component, Ch06Component, Ch07Component, Ch08Component, Ch09Component, Ch10Component, Ch11Component, Ch12Component, Ch13Component, Ch14Component, Ch15Component, Ch16Component, Ch17Component, Ch18Component],
  imports: [
    CommonModule,
    Ebe1RoutingModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    MatToolbarModule,
  ],
})
export class Ebe1Module {}
