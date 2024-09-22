import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissedCallsPage } from './missed-calls.page';

const routes: Routes = [
  {
    path: '',
    component: MissedCallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissedCallsPageRoutingModule {}
