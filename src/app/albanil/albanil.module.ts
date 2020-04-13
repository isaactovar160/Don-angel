import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbanilPageRoutingModule } from './albanil-routing.module';

import { AlbanilPage } from './albanil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbanilPageRoutingModule
  ],
  declarations: [AlbanilPage]
})
export class AlbanilPageModule {}
