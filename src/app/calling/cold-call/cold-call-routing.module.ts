import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColdCallPage } from './cold-call.page';

const routes: Routes = [
  {
    path: '',
    component: ColdCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColdCallPageRoutingModule {}
