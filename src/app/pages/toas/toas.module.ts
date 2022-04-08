import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToasPageRoutingModule } from './toas-routing.module';

import { ToasPage } from './toas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToasPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ToasPage],
})
export class ToasPageModule {}
