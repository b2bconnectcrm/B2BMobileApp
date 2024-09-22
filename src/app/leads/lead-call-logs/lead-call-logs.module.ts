import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadCallLogsPageRoutingModule } from './lead-call-logs-routing.module';

import { LeadCallLogsPage } from './lead-call-logs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadCallLogsPageRoutingModule
  ],
  declarations: [LeadCallLogsPage]
})
export class LeadCallLogsPageModule {}
