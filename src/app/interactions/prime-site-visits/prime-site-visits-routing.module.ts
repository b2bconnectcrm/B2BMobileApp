import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeSiteVisitsPage } from './prime-site-visits.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeSiteVisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeSiteVisitsPageRoutingModule {}
