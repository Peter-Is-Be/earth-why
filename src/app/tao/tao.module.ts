import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {TaoRoutingModule} from "./tao-routing.module";
import {TaoIndexComponent} from "./tao-index/tao-index.component";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [TaoIndexComponent],
  imports: [CommonModule, TaoRoutingModule, MatDividerModule],
})
export class TaoModule {}
