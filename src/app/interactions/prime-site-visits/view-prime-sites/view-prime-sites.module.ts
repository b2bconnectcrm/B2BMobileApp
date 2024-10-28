import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPrimeSitesPageRoutingModule } from './view-prime-sites-routing.module';

import { ViewPrimeSitesPage } from './view-prime-sites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPrimeSitesPageRoutingModule
  ],
  declarations: [ViewPrimeSitesPage]
})
export class ViewPrimeSitesPageModule {}
