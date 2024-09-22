import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekFollowupsPageRoutingModule } from './week-followups-routing.module';

import { WeekFollowupsPage } from './week-followups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekFollowupsPageRoutingModule
  ],
  declarations: [WeekFollowupsPage]
})
export class WeekFollowupsPageModule {}
