import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceHealthComponent } from './service-health/service-health.component';
import { HealthDashboardComponent } from './health-dashboard/health-dashboard.component';

const routes: Routes = [
  { path: 'service-health', component: ServiceHealthComponent },
  { path: 'health', component: HealthDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
