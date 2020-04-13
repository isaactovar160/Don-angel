import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'albanil',
    loadChildren: () => import('./albanil/albanil.module').then( m => m.AlbanilPageModule)
  },
  {
    path: 'carpenter',
    loadChildren: () => import('./carpenter/carpenter.module').then( m => m.CarpenterPageModule)
  },
  {
    path: 'ceramica',
    loadChildren: () => import('./ceramica/ceramica.module').then( m => m.CeramicaPageModule)
  },
  {
    path: 'devices',
    loadChildren: () => import('./devices/devices.module').then( m => m.DevicesPageModule)
  },
  {
    path: 'electric',
    loadChildren: () => import('./electric/electric.module').then( m => m.ElectricPageModule)
  },
  {
    path: 'hire',
    loadChildren: () => import('./hire/hire.module').then( m => m.HirePageModule)
  },
  {
    path: 'plumber',
    loadChildren: () => import('./plumber/plumber.module').then( m => m.PlumberPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'worker-test',
    loadChildren: () => import('./worker-test/worker-test.module').then( m => m.WorkerTestPageModule)
  },
  {
    path: 'worker-waiting',
    loadChildren: () => import('./worker-waiting/worker-waiting.module').then( m => m.WorkerWaitingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
