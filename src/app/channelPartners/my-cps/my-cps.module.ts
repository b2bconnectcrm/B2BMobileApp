import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCpsPageRoutingModule } from './my-cps-routing.module';

import { MyCpsPage } from './my-cps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCpsPageRoutingModule
  ],
  declarations: [MyCpsPage]
})
export class MyCpsPageModule {}
