import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLeadDetailsPageRoutingModule } from './view-lead-details-routing.module';

import { ViewLeadDetailsPage } from './view-lead-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLeadDetailsPageRoutingModule
  ],
  declarations: [ViewLeadDetailsPage]
})
export class ViewLeadDetailsPageModule {}
