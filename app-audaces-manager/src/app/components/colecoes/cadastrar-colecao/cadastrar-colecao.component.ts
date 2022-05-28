import { Component } from '@angular/core';
import { Colecoes } from 'src/app/classes/colecoes';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-cadastrar-colecao',
  templateUrl: './cadastrar-colecao.component.html',
  styleUrls: ['./cadastrar-colecao.component.scss'],
})
export class CadastrarColecaoComponent {

  public cadastroDeColecao: Colecoes[] = [];

  public cadastraColecao: Colecoes = {
    id: 0, nome: '', marca: '', estacao: '',
    orcamento: 0, lancamento: 0, responsavel: '',
  };

  constructor(private colecaoService: ColecaoService) { }

  public postDataColecoes() {
    this.colecaoService.postColecoes(this.cadastraColecao).subscribe((dados) => {
      this.cadastroDeColecao = dados.map((key: any) => {
        return new Colecoes(
          key.id, key.nome, key.marca, key.estacao,
          key.orcamento, key.lancamento, key.responsavel
        )
      });
    });
  }
}
