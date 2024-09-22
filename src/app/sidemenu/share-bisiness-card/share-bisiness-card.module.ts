import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareBisinessCardPageRoutingModule } from './share-bisiness-card-routing.module';

import { ShareBisinessCardPage } from './share-bisiness-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareBisinessCardPageRoutingModule
  ],
  declarations: [ShareBisinessCardPage]
})
export class ShareBisinessCardPageModule {}
