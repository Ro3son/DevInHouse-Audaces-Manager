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

  public totalColecao: Colecoes[] = [];

  public totalModelo: Modelos[] = [];

  constructor(
    private modeloService: ModeloService,
    private colecaoService: ColecaoService
  ) { }

  ngOnInit() {
    this.getDataModelos(), this.getDataColecoes();
  }

  public getDataModelos() {
    this.modeloService.getModelos().subscribe((dados) => {
      this.totalModelo = dados;
      console.log(this.totalModelo);
    });
  }
  public getDataColecoes() {
    this.colecaoService.getColecoes().subscribe((dados) => {
      this.totalColecao = dados;
      console.log(this.totalColecao);
    });
  }
}
