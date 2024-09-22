import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteVisitSchedulesPage } from './site-visit-schedules.page';

const routes: Routes = [
  {
    path: '',
    component: SiteVisitSchedulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteVisitSchedulesPageRoutingModule {}
