import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmaPage } from './cma.page';

const routes: Routes = [
  {
    path: '',
    component: CmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmaPageRoutingModule {}
