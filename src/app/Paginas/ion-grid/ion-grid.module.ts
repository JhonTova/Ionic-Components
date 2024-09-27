import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonGridPageRoutingModule } from './ion-grid-routing.module';

import { IonGridPage } from './ion-grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonGridPageRoutingModule
  ],
  declarations: [IonGridPage]
})
export class IonGridPageModule {}
