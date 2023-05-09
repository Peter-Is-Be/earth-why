import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HctIndexComponent } from './hct-index/hct-index.component';

const routes: Routes = [{ path: '', component: HctIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HctRoutingModule { }
