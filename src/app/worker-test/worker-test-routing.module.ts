import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerTestPage } from './worker-test.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerTestPageRoutingModule {}
