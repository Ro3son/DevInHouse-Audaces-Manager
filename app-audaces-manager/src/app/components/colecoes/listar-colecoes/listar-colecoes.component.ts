import { Component, OnInit } from '@angular/core';
import { Colecoes } from 'src/app/classes/colecoes';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-listar-colecoes',
  templateUrl: './listar-colecoes.component.html',
  styleUrls: ['./listar-colecoes.component.scss'],
})
export class ListarColecoesComponent implements OnInit {

  public colecoes: Colecoes[] = [];

  constructor(private colecoesService: ColecaoService) {}

  ngOnInit() { this.getDataColecoes() }
 
  public getDataColecoes() {
    this.colecoesService.getColecoes().subscribe((data) => {
      this.colecoes = data.map((key) => {
        return new Colecoes(key.id, key.nome, key.estacao, key.responsavel);
      });
    });
  }
}
