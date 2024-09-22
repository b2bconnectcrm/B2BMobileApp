import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmaPageRoutingModule } from './cma-routing.module';

import { CmaPage } from './cma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmaPageRoutingModule
  ],
  declarations: [CmaPage]
})
export class CmaPageModule {}
