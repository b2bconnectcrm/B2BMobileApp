import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColdCallPageRoutingModule } from './cold-call-routing.module';

import { ColdCallPage } from './cold-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColdCallPageRoutingModule
  ],
  declarations: [ColdCallPage]
})
export class ColdCallPageModule {}
