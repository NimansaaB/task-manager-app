import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./features/tasks/tasks.routes').then(m => m.TASKS_ROUTES),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];
