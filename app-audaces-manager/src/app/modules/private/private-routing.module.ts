import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { CadastrarColecaoComponent } from 'src/app/components/colecoes/cadastrar-colecao/cadastrar-colecao.component';
import { ColecoesComponent } from 'src/app/components/colecoes/colecoes.component';
import { EditarColecaoComponent } from 'src/app/components/colecoes/editar-colecao/editar-colecao.component';
import { ModelosComponent } from 'src/app/components/modelos/modelos.component';
import { CadastrarModeloComponent } from 'src/app/components/modelos/cadastrar-modelo/cadastrar-modelo.component';
import { EditarModeloComponent } from 'src/app/components/modelos/editar-modelo/editar-modelo.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'colecoes', component: ColecoesComponent },
  { path: 'cadastrar', component: CadastrarColecaoComponent },
  { path: 'colecoes/:colecaoId', component: EditarColecaoComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'cadastrarModelos',component: CadastrarModeloComponent },
  { path: 'modelos/:modeloId', component: EditarModeloComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
