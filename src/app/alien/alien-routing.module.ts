import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AlienIndexComponent} from "./alien-index/alien-index.component";

const routes: Routes = [{path: "", component: AlienIndexComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlienRoutingModule {}
