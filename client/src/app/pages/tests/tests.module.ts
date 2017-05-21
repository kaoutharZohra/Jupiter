import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';

@NgModule({
  imports: [
    CommonModule,
    TestsRoutingModule
  ],
  declarations: [TestsComponent]
})
export class TestsModule { }
