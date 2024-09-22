import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteVisitSchedulesPageRoutingModule } from './site-visit-schedules-routing.module';

import { SiteVisitSchedulesPage } from './site-visit-schedules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteVisitSchedulesPageRoutingModule
  ],
  declarations: [SiteVisitSchedulesPage]
})
export class SiteVisitSchedulesPageModule {}
