import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColdMeetingPage } from './cold-meeting.page';

const routes: Routes = [
  {
    path: '',
    component: ColdMeetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColdMeetingPageRoutingModule {}
