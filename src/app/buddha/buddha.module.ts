import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BuddhaRoutingModule} from "./buddha-routing.module";
import {BuddhaIndexComponent} from "./buddha-index/buddha-index.component";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [BuddhaIndexComponent],
  imports: [CommonModule, BuddhaRoutingModule, MatDividerModule],
})
export class BuddhaModule {}
