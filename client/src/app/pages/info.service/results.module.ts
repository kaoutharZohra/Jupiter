import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Charts } from '../charts/charts.component';
import { ChartistJs } from '../charts/components/chartistJs/chartistJs.component';
import { ChartistJsService } from '../charts/components/chartistJs/chartistJs.service';
import { AppTranslationModule } from '../../app.translation.module';

import { routing } from './results-routing';
import { ResultsComponent } from './results.component';

@NgModule({
  imports: [
     CommonModule,
    AppTranslationModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
  ResultsComponent,
    Charts,
    ChartistJs
  ],
  providers: [
    ChartistJsService
  ]
})
export class ResultsModule { }
