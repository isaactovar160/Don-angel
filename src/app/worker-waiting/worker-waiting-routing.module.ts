import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerWaitingPage } from './worker-waiting.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerWaitingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerWaitingPageRoutingModule {}
