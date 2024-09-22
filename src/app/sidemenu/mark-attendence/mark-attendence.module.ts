import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkAttendencePageRoutingModule } from './mark-attendence-routing.module';

import { MarkAttendencePage } from './mark-attendence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkAttendencePageRoutingModule
  ],
  declarations: [MarkAttendencePage]
})
export class MarkAttendencePageModule {}
