import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyVisitsPage } from './my-visits.page';

const routes: Routes = [
  {
    path: '',
    component: MyVisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyVisitsPageRoutingModule {}
