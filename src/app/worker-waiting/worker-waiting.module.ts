import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerWaitingPageRoutingModule } from './worker-waiting-routing.module';

import { WorkerWaitingPage } from './worker-waiting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerWaitingPageRoutingModule
  ],
  declarations: [WorkerWaitingPage]
})
export class WorkerWaitingPageModule {}
