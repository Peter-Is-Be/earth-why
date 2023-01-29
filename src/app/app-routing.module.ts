import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: "", redirectTo: "alien", pathMatch: "full"},
  {
    path: "demo-pages",
    loadChildren: () =>
      import("./demo-pages/demo-pages.module").then((m) => m.DemoPagesModule),
  },
  {
    path: "alien",
    loadChildren: () =>
      import("./alien/alien.module").then((m) => m.AlienModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
