import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McfListPageRoutingModule } from './mcf-list-routing.module';

import { McfListPage } from './mcf-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McfListPageRoutingModule
  ],
  declarations: [McfListPage]
})
export class McfListPageModule {}
