import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EarthIndexComponent} from "./earth-index/earth-index.component";

const routes: Routes = [{path: "", component: EarthIndexComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarthRoutingModule {}
