import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissedCallsPageRoutingModule } from './missed-calls-routing.module';

import { MissedCallsPage } from './missed-calls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissedCallsPageRoutingModule
  ],
  declarations: [MissedCallsPage]
})
export class MissedCallsPageModule {}
