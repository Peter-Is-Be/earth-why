import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {EarthRoutingModule} from "./earth-routing.module";
import {EarthIndexComponent} from "./earth-index/earth-index.component";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [EarthIndexComponent],
  imports: [CommonModule, EarthRoutingModule, MatDividerModule],
})
export class EarthModule {}
