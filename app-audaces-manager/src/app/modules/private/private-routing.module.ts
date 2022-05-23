import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ListarColecoesComponent } from 'src/app/components/colecoes/listar-colecoes/listar-colecoes.component';
import { ListarModelosComponent } from 'src/app/components/modelos/listar-modelos/listar-modelos.component';
import { CadastrarColecaoComponent } from 'src/app/components/colecoes/cadastrar-colecao/cadastrar-colecao.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'colecoes', component: ListarColecoesComponent },
  { path: 'criar', component: CadastrarColecaoComponent },
  { path: 'modelos', component: ListarModelosComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
