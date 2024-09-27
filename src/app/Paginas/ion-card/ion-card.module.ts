import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonCardPageRoutingModule } from './ion-card-routing.module';
import { IonCardPage } from './ion-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonCardPageRoutingModule
  ],
  declarations: [IonCardPage]
})
export class IonCardPageModule {}