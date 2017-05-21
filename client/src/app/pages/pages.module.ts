import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Pages } from './pages.component';
import { TestsComponent } from './tests/tests.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { MethodesComponent } from './methodes/methodes.component';
import { ResultsComponent } from './results/results.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages, TestsComponent, RessourcesComponent, MethodesComponent, ResultsComponent, LogsComponent]
})
export class PagesModule {
}
