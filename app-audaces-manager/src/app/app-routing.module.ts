import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component'
import { DashboardComponent } from './home/dashboard/dashboard.component';

// Path é o caminho (URL) e o componente //
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'senha', component: EsqueciSenhaComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
