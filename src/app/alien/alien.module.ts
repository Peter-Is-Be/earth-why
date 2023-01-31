import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";

import {AlienRoutingModule} from "./alien-routing.module";
import {AlienIndexComponent} from "./alien-index/alien-index.component";

@NgModule({
  declarations: [AlienIndexComponent],
  imports: [
    CommonModule,
    AlienRoutingModule,
    MatDividerModule,
    MatButtonModule,
  ],
})
export class AlienModule {}
