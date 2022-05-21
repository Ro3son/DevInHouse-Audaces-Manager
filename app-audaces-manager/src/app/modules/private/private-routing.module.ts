import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ListarColecoesComponent } from 'src/app/components/colecoes/listar-colecoes/listar-colecoes.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'colecoes', component: ListarColecoesComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
