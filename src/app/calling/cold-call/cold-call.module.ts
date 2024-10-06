import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColdCallPageRoutingModule } from './cold-call-routing.module';

import { ColdCallPage } from './cold-call.page';
import { AppModule } from 'src/app/app.module';

@NgModule({
  imports: [    
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ColdCallPageRoutingModule
  ],
  declarations: [ColdCallPage]
})
export class ColdCallPageModule {}
