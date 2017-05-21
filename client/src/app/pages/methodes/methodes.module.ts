import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MethodesRoutingModule } from './methodes-routing.module';
import { MethodesComponent } from './methodes.component';

@NgModule({
  imports: [
    CommonModule,
    MethodesRoutingModule
  ],
  declarations: [MethodesComponent]
})
export class MethodesModule { }
