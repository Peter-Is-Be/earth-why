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
    path: "buddha",
    loadChildren: () =>
      import("./buddha/buddha.module").then((m) => m.BuddhaModule),
  },
  {
    path: "tao",
    loadChildren: () => import("./tao/tao.module").then((m) => m.TaoModule),
  },
  {
    path: "alien",
    loadChildren: () =>
      import("./alien/alien.module").then((m) => m.AlienModule),
  },
  {
    path: "earth",
    loadChildren: () =>
      import("./earth/earth.module").then((m) => m.EarthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
