import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkAttendencePage } from './mark-attendence.page';

const routes: Routes = [
  {
    path: '',
    component: MarkAttendencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkAttendencePageRoutingModule {}
