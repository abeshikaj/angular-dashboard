import { Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form';
import { CustomerResponseComponent } from './customer-response/customer-response';
import { WorkersDashboardComponent } from './workers-dashboard/workers-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'customer-form', pathMatch: 'full' },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'customer-response', component: CustomerResponseComponent },
  { path: 'workers-dashboard', component: WorkersDashboardComponent },
];
