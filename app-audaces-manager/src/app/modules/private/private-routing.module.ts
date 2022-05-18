import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
