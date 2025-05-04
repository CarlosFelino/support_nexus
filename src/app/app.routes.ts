// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthComponent } from './modules/features/auth/auth/auth.component';
import { HomeComponent } from './modules/home/home/home.component';

export const routes: Routes = [  // Adicione 'export' aqui
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth/login',
    component: AuthComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'professor',
    loadChildren: () => import('./modules/features/professor/professor.module').then(m => m.ProfessorModule)
  }
];
