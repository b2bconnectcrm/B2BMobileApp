import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingFollowupsPageRoutingModule } from './pending-followups-routing.module';

import { PendingFollowupsPage } from './pending-followups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingFollowupsPageRoutingModule
  ],
  declarations: [PendingFollowupsPage]
})
export class PendingFollowupsPageModule {}
