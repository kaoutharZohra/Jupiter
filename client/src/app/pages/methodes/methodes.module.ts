import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { DataFilterPipe } from '../tables/components/dataTables/data-filter.pipe';
import { HotTable, HotTableModule } from 'ng2-handsontable';


import { BasicTables } from '../tables/components/basicTables/basicTables.component';
import { BasicTablesService } from '../tables/components/basicTables/basicTables.service';
import { ResponsiveTable } from '../tables/components/basicTables/components/responsiveTable';
import { StripedTable } from '../tables/components/basicTables/components/stripedTable';
import { BorderedTable } from '../tables/components/basicTables/components/borderedTable';
import { HoverTable } from '../tables/components/basicTables/components/hoverTable';
import { ContextualTable } from '../tables/components/basicTables/components/contextualTable';

import { CondensedTableModule } from '../tables/components/basicTables/components/condensedTable/condensedTable.module';
import { SmartTables } from '../tables/components/smartTables/smartTables.component';
import { SmartTablesService } from '../tables/components/smartTables/smartTables.service';
import { DataTables } from '../tables/components/dataTables/dataTables.component';
import { DataTablesService } from '../tables/components/dataTables/dataTables.service';

import { HotTablesComponent } from '../tables/components/hotTables/hotTables.component';
import { HandsontableSectionComponent } from '../tables/components/hotTables/handsontable-section';
import { BasicDemoComponent } from '../tables/components/hotTables/handsontable/basic-demo';
import { SheetDemoComponent } from '../tables/components/hotTables/handsontable/sheet-demo';
import { FinanceDemoComponent } from '../tables/components/hotTables/handsontable/finance-demo';
import { ScienceDemoComponent } from '../tables/components/hotTables/handsontable/science-demo';
import { SportDemoComponent } from '../tables/components/hotTables/handsontable/sport-demo';
import { AdvancedDemoComponent } from '../tables/components/hotTables/handsontable/advanced-demo';


import { routing } from './methodes-routing';
import { MethodesComponent } from './methodes.component';

@NgModule({
  imports: [

   CommonModule,
    FormsModule,CondensedTableModule ,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule,
    AppTranslationModule
      
  ],
  declarations: [MethodesComponent,
   BasicTables,
    HoverTable,
    BorderedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable,
    SmartTables,
    DataTables,
    DataFilterPipe,
    HotTablesComponent,
    HandsontableSectionComponent,
    BasicDemoComponent,
    AdvancedDemoComponent,
    FinanceDemoComponent,
    ScienceDemoComponent,
    SportDemoComponent,
    SheetDemoComponent],
  providers: [BasicTablesService]
})
export class MethodesModule { }
