import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekFollowupsPage } from './week-followups.page';

const routes: Routes = [
  {
    path: '',
    component: WeekFollowupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekFollowupsPageRoutingModule {}
