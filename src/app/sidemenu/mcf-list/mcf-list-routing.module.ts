import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McfListPage } from './mcf-list.page';

const routes: Routes = [
  {
    path: '',
    component: McfListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McfListPageRoutingModule {}
