import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { CondensedTable } from './index';

@NgModule({
  imports: [
     CommonModule,
    FormsModule
        
  ],
  declarations: [
 
   CondensedTable

  ],  exports: [ CondensedTable ]

})
export class CondensedTableModule { }
