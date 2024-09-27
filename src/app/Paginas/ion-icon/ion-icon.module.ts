import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonIconPageRoutingModule } from './ion-icon-routing.module';

import { IonIconPage } from './ion-icon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonIconPageRoutingModule
  ],
  declarations: [IonIconPage]
})
export class IonIconPageModule {}
