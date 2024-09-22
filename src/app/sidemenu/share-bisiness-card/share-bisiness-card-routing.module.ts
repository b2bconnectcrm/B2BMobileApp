import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareBisinessCardPage } from './share-bisiness-card.page';

const routes: Routes = [
  {
    path: '',
    component: ShareBisinessCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareBisinessCardPageRoutingModule {}
