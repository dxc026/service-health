import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceHealthComponent } from './service-health/service-health.component';

const routes: Routes = [
  { path: 'service-health', component: ServiceHealthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
