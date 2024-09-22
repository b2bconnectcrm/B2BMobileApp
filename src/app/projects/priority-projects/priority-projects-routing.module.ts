import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriorityProjectsPage } from './priority-projects.page';

const routes: Routes = [
  {
    path: '',
    component: PriorityProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriorityProjectsPageRoutingModule {}
