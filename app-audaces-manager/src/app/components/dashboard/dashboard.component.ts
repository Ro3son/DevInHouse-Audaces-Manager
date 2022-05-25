import { Component, OnInit, Input } from '@angular/core';
import { Colecoes } from 'src/app/classes/colecoes';
import { ColecaoService } from 'src/app/services/colecao.service';
import { Modelos } from '../../classes/modelos';
import { ModeloService } from '../../services/modelo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public colecoes: Colecoes[] = [];

  public modelos: Modelos[] = [];

  constructor(
    private modeloService: ModeloService,
    private colecaoService: ColecaoService
  ) { }

  ngOnInit() {
    this.getDataColecoes(),
    this.getDataModelos();
  }

  public getDataColecoes() {
    this.colecaoService.getColecoes().subscribe((dados) => {
      this.colecoes = dados;
      console.log(this.colecoes);
    });
  }

  public getDataModelos() {
    this.modeloService.getModelos().subscribe((dados) => {
      this.modelos = dados;
      console.log(this.modelos);
    });
  }

}
