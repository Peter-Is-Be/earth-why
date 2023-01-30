import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BuddhaIndexComponent} from "./buddha-index/buddha-index.component";

const routes: Routes = [{path: "", component: BuddhaIndexComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuddhaRoutingModule {}
