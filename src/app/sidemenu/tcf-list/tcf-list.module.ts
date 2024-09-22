import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TcfListPageRoutingModule } from './tcf-list-routing.module';

import { TcfListPage } from './tcf-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TcfListPageRoutingModule
  ],
  declarations: [TcfListPage]
})
export class TcfListPageModule {}
