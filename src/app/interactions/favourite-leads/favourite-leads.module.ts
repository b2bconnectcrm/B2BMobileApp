import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteLeadsPageRoutingModule } from './favourite-leads-routing.module';

import { FavouriteLeadsPage } from './favourite-leads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteLeadsPageRoutingModule
  ],
  declarations: [FavouriteLeadsPage]
})
export class FavouriteLeadsPageModule {}
