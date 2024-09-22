import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpSubmittedLeadsPage } from './cp-submitted-leads.page';

const routes: Routes = [
  {
    path: '',
    component: CpSubmittedLeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpSubmittedLeadsPageRoutingModule {}
