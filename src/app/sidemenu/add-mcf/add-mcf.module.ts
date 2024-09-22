import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMcfPageRoutingModule } from './add-mcf-routing.module';

import { AddMcfPage } from './add-mcf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMcfPageRoutingModule
  ],
  declarations: [AddMcfPage]
})
export class AddMcfPageModule {}
