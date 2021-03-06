import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';

import { ColecoesComponent } from './components/colecoes/colecoes.component';
import { ListarColecoesComponent } from './components/colecoes/listar-colecoes/listar-colecoes.component';
import { CadastrarColecaoComponent } from './components/colecoes/cadastrar-colecao/cadastrar-colecao.component';
import { EditarColecaoComponent } from './components/colecoes/editar-colecao/editar-colecao.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { ListarModelosComponent } from './components/modelos/listar-modelos/listar-modelos.component';
import { CadastrarModeloComponent } from './components/modelos/cadastrar-modelo/cadastrar-modelo.component';
import { EditarModeloComponent } from './components/modelos/editar-modelo/editar-modelo.component';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    HomeComponent,
    MenuComponent,
    DashboardComponent,
    ColecoesComponent,
    ListarColecoesComponent,
    CadastrarColecaoComponent,
    EditarColecaoComponent,
    ModelosComponent,
    ListarModelosComponent,
    CadastrarModeloComponent,
    EditarModeloComponent,
    OrderPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
