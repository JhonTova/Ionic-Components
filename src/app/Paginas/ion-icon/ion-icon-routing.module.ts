import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonIconPage } from './ion-icon.page';

const routes: Routes = [
  {
    path: '',
    component: IonIconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonIconPageRoutingModule {}
