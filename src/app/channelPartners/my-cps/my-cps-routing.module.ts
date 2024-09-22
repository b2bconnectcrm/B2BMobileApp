import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCpsPage } from './my-cps.page';

const routes: Routes = [
  {
    path: '',
    component: MyCpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCpsPageRoutingModule {}
