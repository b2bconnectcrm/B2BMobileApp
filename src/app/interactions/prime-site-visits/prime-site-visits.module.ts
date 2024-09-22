import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeSiteVisitsPageRoutingModule } from './prime-site-visits-routing.module';

import { PrimeSiteVisitsPage } from './prime-site-visits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeSiteVisitsPageRoutingModule
  ],
  declarations: [PrimeSiteVisitsPage]
})
export class PrimeSiteVisitsPageModule {}
