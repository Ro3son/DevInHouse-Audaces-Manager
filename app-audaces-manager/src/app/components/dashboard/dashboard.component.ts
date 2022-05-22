import { Component, OnInit, Input } from '@angular/core';

import { Modelos } from '../../classes/modelos';
import { ModeloService } from '../../services/modelo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() colecao = [{},{}];

  public modelo: Modelos[] = [];

  constructor(private ModeloService: ModeloService) { }

  ngOnInit() { this.getDataModelos() }

  public getDataModelos() {
    this.ModeloService.getModelos().subscribe((dados) => {
      this.modelo = dados;
      console.log(this.modelo);
    });
  }
}
