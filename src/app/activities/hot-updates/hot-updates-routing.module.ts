import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotUpdatesPage } from './hot-updates.page';

const routes: Routes = [
  {
    path: '',
    component: HotUpdatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotUpdatesPageRoutingModule {}
