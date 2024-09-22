import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteLeadsPage } from './favourite-leads.page';

const routes: Routes = [
  {
    path: '',
    component: FavouriteLeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouriteLeadsPageRoutingModule {}
