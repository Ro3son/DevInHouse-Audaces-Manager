import { Component, OnInit } from '@angular/core';
import { Colecoes } from 'src/app/classes/colecoes';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-editar-colecao',
  templateUrl: './editar-colecao.component.html',
  styleUrls: ['./editar-colecao.component.scss']
})
export class EditarColecaoComponent implements OnInit {

  public edicaoDecolecoes: Colecoes[] = [];

  public editaColecao: Colecoes = {
    id: 1, nome: 'Coleção 1', marca: 'x', estacao: 'Verão',
    orcamento: 3100, lancamento: 2023, responsavel: 'Robson',
  };

  constructor(private colecaoService: ColecaoService) { }

  ngOnInit() { this.putDataColecoes() }

  public putDataColecoes() {
    this.colecaoService.putColecoes(this.editaColecao).subscribe(() => {
      alert('Coleção Editada');
    });
  }
}
