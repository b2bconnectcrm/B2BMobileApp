import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriorityProjectsPageRoutingModule } from './priority-projects-routing.module';

import { PriorityProjectsPage } from './priority-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriorityProjectsPageRoutingModule
  ],
  declarations: [PriorityProjectsPage]
})
export class PriorityProjectsPageModule {}
