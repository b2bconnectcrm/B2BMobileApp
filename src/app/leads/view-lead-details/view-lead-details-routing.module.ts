import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLeadDetailsPage } from './view-lead-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLeadDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLeadDetailsPageRoutingModule {}
