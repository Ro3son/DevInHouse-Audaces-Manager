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

  constructor(
    private colecaoService: ColecaoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const colecao_id = this.route.snapshot.paramMap;
    const idFromRoute = Number(colecao_id.get('colecaoId'));
    const colecaoId = this.colecaoService.getId(idFromRoute).subscribe(() => {
      console.log(idFromRoute);
      console.log(colecaoId);
    });
  }

  public editColecao() {
    if (this.editaColecao) {
      console.log(this.editaColecao);
    }
    let colecoes = (this.editaColecao.id) ?
      this.colecaoService.putColecoes(this.editaColecao).subscribe((dados) => {
        this.edicaoDecolecoes = dados.map((key) => {
          return new Colecoes(
            key.id, key.nome, key.marca, key.estacao,
            key.orcamento, key.lancamento, key.responsavel
          )
        })
      }) : alert('Coleção Alterada');
      // this.colecaoService.postColecoes(this.editaColecao).subscribe((dados) => {
      //   this.edicaoDecolecoes = dados.map((key) => {
      //     return new Colecoes(
      //       key.id, key.nome, key.marca, key.estacao,
      //       key.orcamento, key.lancamento, key.responsavel
      //     )
      //   });
      // });
  }
}
