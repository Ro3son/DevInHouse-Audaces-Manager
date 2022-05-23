import { Component, OnInit, Input } from '@angular/core';
import { Colecoes } from 'src/app/classes/colecoes';
import { Modelos } from '../../classes/modelos';
import { ModeloService } from '../../services/modelo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() colecao: Colecoes[] = [];

  public modelo: Modelos[] = [];

  constructor(private modeloService: ModeloService) { }

  ngOnInit() { this.getDataModelos() }

  public getDataModelos() {
    this.modeloService.getModelos().subscribe((dados) => {
      this.modelo = dados;
    });
  }
}
