import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMcfPage } from './add-mcf.page';

const routes: Routes = [
  {
    path: '',
    component: AddMcfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMcfPageRoutingModule {}
