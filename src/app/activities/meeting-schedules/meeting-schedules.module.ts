import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetingSchedulesPageRoutingModule } from './meeting-schedules-routing.module';

import { MeetingSchedulesPage } from './meeting-schedules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetingSchedulesPageRoutingModule
  ],
  declarations: [MeetingSchedulesPage]
})
export class MeetingSchedulesPageModule {}
