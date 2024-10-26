import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDealsPageRoutingModule } from './add-deals-routing.module';

import { AddDealsPage } from './add-deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddDealsPageRoutingModule
  ],
  declarations: [AddDealsPage]
})
export class AddDealsPageModule {}
