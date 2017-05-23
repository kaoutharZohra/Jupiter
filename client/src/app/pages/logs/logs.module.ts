import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './logs-routing';
import { LogsComponent } from './logs.component';
import { Calendar } from '../dashboard/calendar/index';
import { CalendarService } from '../dashboard/calendar/calendar.service';
@NgModule({
  imports: [
    CommonModule,
    routing,NgaModule
  ],
  declarations: [LogsComponent,Calendar]
  , providers:[CalendarService]
})
export class LogsModule { }
