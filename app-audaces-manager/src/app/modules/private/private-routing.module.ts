import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ListarModelosComponent } from 'src/app/components/modelos/listar-modelos/listar-modelos.component';
import { CadastrarColecaoComponent } from 'src/app/components/colecoes/cadastrar-colecao/cadastrar-colecao.component';
import { ColecoesComponent } from 'src/app/components/colecoes/colecoes.component';
import { EditarColecaoComponent } from 'src/app/components/colecoes/editar-colecao/editar-colecao.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'colecoes', component: ColecoesComponent },
  { path: 'cadastrar', component: CadastrarColecaoComponent },
  { path: 'colecoes/:colecaoId', component: EditarColecaoComponent },

  { path: 'modelos', component: ListarModelosComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
