import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotUpdatesPageRoutingModule } from './hot-updates-routing.module';

import { HotUpdatesPage } from './hot-updates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotUpdatesPageRoutingModule
  ],
  declarations: [HotUpdatesPage]
})
export class HotUpdatesPageModule {}
