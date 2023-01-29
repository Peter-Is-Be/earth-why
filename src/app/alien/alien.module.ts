import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MatDividerModule} from "@angular/material/divider";

import {AlienRoutingModule} from "./alien-routing.module";
import {AlienIndexComponent} from "./alien-index/alien-index.component";

@NgModule({
  declarations: [AlienIndexComponent],
  imports: [CommonModule, AlienRoutingModule, MatDividerModule],
})
export class AlienModule {}
