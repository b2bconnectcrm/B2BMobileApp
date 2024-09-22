import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyVisitsPageRoutingModule } from './my-visits-routing.module';

import { MyVisitsPage } from './my-visits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyVisitsPageRoutingModule
  ],
  declarations: [MyVisitsPage]
})
export class MyVisitsPageModule {}
