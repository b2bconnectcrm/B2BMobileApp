import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTeamInteractionsPage } from './my-team-interactions.page';

const routes: Routes = [
  {
    path: '',
    component: MyTeamInteractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTeamInteractionsPageRoutingModule {}
