import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbanilPage } from './albanil.page';

const routes: Routes = [
  {
    path: '',
    component: AlbanilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbanilPageRoutingModule {}
