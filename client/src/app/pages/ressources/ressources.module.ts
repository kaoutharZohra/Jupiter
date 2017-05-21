import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourcesRoutingModule } from './ressources-routing.module';
import { RessourcesComponent } from './ressources.component';

@NgModule({
  imports: [
    CommonModule,
    RessourcesRoutingModule
  ],
  declarations: [RessourcesComponent]
})
export class RessourcesModule { }
