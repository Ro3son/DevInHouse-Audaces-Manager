import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    id: 0, nome: '', marca: '', estacao: '',
    orcamento: 0, lancamento: 0, responsavel: '',
  };

  constructor(private colecaoService: ColecaoService, private route: ActivatedRoute) { }

  ngOnInit() { }

  public editColecao() {
    this.colecaoService.putColecoes(this.editaColecao).subscribe(() => {
      alert('Coleção Editada');
    });
  }
}
