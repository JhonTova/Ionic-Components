import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonCardPage } from './ion-card.page';

const routes: Routes = [
  {
    path: '',
    component: IonCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonCardPageRoutingModule {}
