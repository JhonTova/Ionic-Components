import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./Paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'ion-card',
    loadChildren: () => import('./Paginas/ion-card/ion-card.module').then( m => m.IonCardPageModule)
  },
  {
    path: 'ion-item',
    loadChildren: () => import('./Paginas/ion-item/ion-item.module').then( m => m.IonItemPageModule)
  },

  {
    path: 'ion-range',
    loadChildren: () => import('./Paginas/ion-range/ion-range.module').then( m => m.IonRangePageModule)
  },
  {
    path: 'ion-grid',
    loadChildren: () => import('./Paginas/ion-grid/ion-grid.module').then( m => m.IonGridPageModule)
  },
  {
    path: 'ion-icon',
    loadChildren: () => import('./Paginas/ion-icon/ion-icon.module').then( m => m.IonIconPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
