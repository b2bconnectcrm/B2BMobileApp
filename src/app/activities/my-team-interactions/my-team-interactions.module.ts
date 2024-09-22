import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTeamInteractionsPageRoutingModule } from './my-team-interactions-routing.module';

import { MyTeamInteractionsPage } from './my-team-interactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTeamInteractionsPageRoutingModule
  ],
  declarations: [MyTeamInteractionsPage]
})
export class MyTeamInteractionsPageModule {}
