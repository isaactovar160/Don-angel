import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeramicaPage } from './ceramica.page';

const routes: Routes = [
  {
    path: '',
    component: CeramicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeramicaPageRoutingModule {}
