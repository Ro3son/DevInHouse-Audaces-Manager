import { Component, OnInit } from '@angular/core';
import { Colecoes } from 'src/app/classes/colecoes';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent implements OnInit {

  public colecao: Colecoes[] = [];

  constructor(private colecaoService: ColecaoService) { }

  ngOnInit() { this.getDataColecoes() }

  public getDataColecoes() {
    this.colecaoService.getColecoes().subscribe((dados) => {
      this.colecao = dados;
      console.log(JSON.stringify(this.colecao));
    });
  }
}
