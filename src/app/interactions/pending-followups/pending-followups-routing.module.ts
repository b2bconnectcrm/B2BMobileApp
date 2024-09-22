import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingFollowupsPage } from './pending-followups.page';

const routes: Routes = [
  {
    path: '',
    component: PendingFollowupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingFollowupsPageRoutingModule {}
