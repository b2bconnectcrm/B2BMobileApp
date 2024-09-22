import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrossSegmentsPageRoutingModule } from './cross-segments-routing.module';

import { CrossSegmentsPage } from './cross-segments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrossSegmentsPageRoutingModule
  ],
  declarations: [CrossSegmentsPage]
})
export class CrossSegmentsPageModule {}
