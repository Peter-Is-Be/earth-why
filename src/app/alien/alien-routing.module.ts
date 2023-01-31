import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AlienIndexComponent} from "./alien-index/alien-index.component";

const routes: Routes = [
  {path: "", component: AlienIndexComponent},
  {
    path: "ebe1",
    loadChildren: () => import("./ebe1/ebe1.module").then((m) => m.Ebe1Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlienRoutingModule {}
