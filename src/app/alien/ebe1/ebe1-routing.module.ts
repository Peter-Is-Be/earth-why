import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Ch0Component} from "./chapt/ch0/ch0.component";
import {Ch01Component} from "./chapt/ch01/ch01.component";
import {Ch02Component} from "./chapt/ch02/ch02.component";
import {Ch03Component} from "./chapt/ch03/ch03.component";
import {Ch04Component} from "./chapt/ch04/ch04.component";
import {Ch05Component} from "./chapt/ch05/ch05.component";
import {Ch06Component} from "./chapt/ch06/ch06.component";
import {Ch07Component} from "./chapt/ch07/ch07.component";
import {Ch08Component} from "./chapt/ch08/ch08.component";
import {Ch09Component} from "./chapt/ch09/ch09.component";
import {Ch10Component} from "./chapt/ch10/ch10.component";
import {Ch11Component} from "./chapt/ch11/ch11.component";
import {Ch12Component} from "./chapt/ch12/ch12.component";
import {Ch13Component} from "./chapt/ch13/ch13.component";
import {Ch14Component} from "./chapt/ch14/ch14.component";
import {Ch15Component} from "./chapt/ch15/ch15.component";
import {Ch16Component} from "./chapt/ch16/ch16.component";
import {Ch17Component} from "./chapt/ch17/ch17.component";
import {Ch18Component} from "./chapt/ch18/ch18.component";
import {Ebe1IndexComponent} from "./ebe1-index/ebe1-index.component";

const routes: Routes = [
  {
    path: "",
    component: Ebe1IndexComponent,
    children: [
      {
        path: "",
        children: [
          {path: "", redirectTo: "ch0", pathMatch: "full"},
          {path: "ch0", component: Ch0Component},
          {path: "ch01", component: Ch01Component},
          {path: "ch02", component: Ch02Component},
          {path: "ch03", component: Ch03Component},
          {path: "ch04", component: Ch04Component},
          {path: "ch05", component: Ch05Component},
          {path: "ch06", component: Ch06Component},
          {path: "ch07", component: Ch07Component},
          {path: "ch08", component: Ch08Component},
          {path: "ch09", component: Ch09Component},
          {path: "ch10", component: Ch10Component},
          {path: "ch11", component: Ch11Component},
          {path: "ch12", component: Ch12Component},
          {path: "ch13", component: Ch13Component},
          {path: "ch14", component: Ch14Component},
          {path: "ch15", component: Ch15Component},
          {path: "ch16", component: Ch16Component},
          {path: "ch17", component: Ch17Component},
          {path: "ch18", component: Ch18Component},
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ebe1RoutingModule {}
