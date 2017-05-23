import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { ChartistJs } from '../charts/components/chartistJs/chartistJs.component';
import { ChartistJsService } from '../charts/components/chartistJs/chartistJs.service';
import { AppTranslationModule } from '../../app.translation.module';
import { CondensedTableModule } from '../tables/components/basicTables/components/condensedTable/condensedTable.module';

import { routing } from './results-routing';
import { ResultsComponent } from './results.component';
import { BasicTablesService } from '../tables/components/basicTables/basicTables.service';
@NgModule({
  imports: [
       CommonModule,
    AppTranslationModule,
    FormsModule,
    NgaModule, 
    routing ,CondensedTableModule
    
  ],
  declarations: [
  ResultsComponent,
    ChartistJs
  ],
  providers: [
    ChartistJsService,BasicTablesService
  ]
})
export class ResultsModule { }
