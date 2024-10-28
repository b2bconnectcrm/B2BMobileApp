import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPrimeSitesPage } from './view-prime-sites.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPrimeSitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPrimeSitesPageRoutingModule {}
