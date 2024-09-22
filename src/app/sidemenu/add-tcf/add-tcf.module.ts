import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTcfPageRoutingModule } from './add-tcf-routing.module';

import { AddTcfPage } from './add-tcf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTcfPageRoutingModule
  ],
  declarations: [AddTcfPage]
})
export class AddTcfPageModule {}
