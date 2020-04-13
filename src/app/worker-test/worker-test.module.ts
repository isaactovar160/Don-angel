import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerTestPageRoutingModule } from './worker-test-routing.module';

import { WorkerTestPage } from './worker-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerTestPageRoutingModule
  ],
  declarations: [WorkerTestPage]
})
export class WorkerTestPageModule {}
