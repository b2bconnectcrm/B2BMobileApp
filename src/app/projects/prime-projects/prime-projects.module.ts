import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeProjectsPageRoutingModule } from './prime-projects-routing.module';

import { PrimeProjectsPage } from './prime-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeProjectsPageRoutingModule
  ],
  declarations: [PrimeProjectsPage]
})
export class PrimeProjectsPageModule {}
