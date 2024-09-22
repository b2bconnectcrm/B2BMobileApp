import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColdMeetingPageRoutingModule } from './cold-meeting-routing.module';

import { ColdMeetingPage } from './cold-meeting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColdMeetingPageRoutingModule
  ],
  declarations: [ColdMeetingPage]
})
export class ColdMeetingPageModule {}
