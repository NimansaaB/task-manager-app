import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AuthGuard } from '../../core/auth/auth.guard';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    component: TaskListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: TaskFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: TaskFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: TaskDetailsComponent,
    canActivate: [AuthGuard]
  }
];
