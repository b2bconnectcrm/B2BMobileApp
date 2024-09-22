import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpSubmittedLeadsPageRoutingModule } from './cp-submitted-leads-routing.module';

import { CpSubmittedLeadsPage } from './cp-submitted-leads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpSubmittedLeadsPageRoutingModule
  ],
  declarations: [CpSubmittedLeadsPage]
})
export class CpSubmittedLeadsPageModule {}
