import { Component, OnInit } from '@angular/core';
import { Colecoes } from '../../classes/colecoes';
import { ColecaoService } from '../../services/colecao.service';
import { Modelos } from '../../classes/modelos';
import { ModeloService } from '../../services/modelo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public colecao: Colecoes[] = [];

  public modelo: Modelos[] = [];

  constructor(private ColecaoService: ColecaoService, private ModeloService: ModeloService) { }

  ngOnInit() { this.getDataColecoes(), this.getDataModelos() }

  public getDataColecoes() {
    this.ColecaoService.getColecoes().subscribe((dados) => {
      this.colecao = dados;
      console.log(this.colecao);
    });
  }
  public getDataModelos() {
    this.ModeloService.getModelos().subscribe((dados) => {
      this.modelo = dados;
      console.log(this.modelo);
    });
  }
}
