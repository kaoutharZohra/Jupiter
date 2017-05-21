import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [




      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'tests', loadChildren: './tests/tests.module#TestsModule' },
      { path: 'ressources', loadChildren: './ressources/ressources.module#RessourcesModule' },
      { path: 'methodes', loadChildren: './methodes/methodes.module#MethodesModule' },
      { path: 'results', loadChildren: './results/results.module#ResultsModule' },
      { path: 'logs', loadChildren: './logs/logs.module#LogsModule' },

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
