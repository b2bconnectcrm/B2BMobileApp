import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingSchedulesPage } from './meeting-schedules.page';

const routes: Routes = [
  {
    path: '',
    component: MeetingSchedulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetingSchedulesPageRoutingModule {}
