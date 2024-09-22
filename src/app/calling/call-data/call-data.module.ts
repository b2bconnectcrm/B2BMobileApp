import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallDataPageRoutingModule } from './call-data-routing.module';

import { CallDataPage } from './call-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallDataPageRoutingModule
  ],
  declarations: [CallDataPage]
})
export class CallDataPageModule {}
