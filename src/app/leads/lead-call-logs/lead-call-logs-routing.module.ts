import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadCallLogsPage } from './lead-call-logs.page';

const routes: Routes = [
  {
    path: '',
    component: LeadCallLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadCallLogsPageRoutingModule {}
