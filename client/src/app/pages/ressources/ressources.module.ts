import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './ressources-routing';
import { RessourcesComponent } from './ressources.component';
import { CondensedTableModule } from '../tables/components/basicTables/components/condensedTable/condensedTable.module';

import { BasicTablesService } from '../tables/components/basicTables/basicTables.service';
@NgModule({
  imports: [
    CommonModule,NgaModule,
    routing,CondensedTableModule
  ],
  declarations: [RessourcesComponent],
  providers:[BasicTablesService]
})
export class RessourcesModule { }
