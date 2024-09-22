import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverallPage } from './overall.page';

const routes: Routes = [
  {
    path: '',
    component: OverallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverallPageRoutingModule {}
