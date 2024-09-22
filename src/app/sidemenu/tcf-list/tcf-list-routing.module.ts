import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcfListPage } from './tcf-list.page';

const routes: Routes = [
  {
    path: '',
    component: TcfListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcfListPageRoutingModule {}
