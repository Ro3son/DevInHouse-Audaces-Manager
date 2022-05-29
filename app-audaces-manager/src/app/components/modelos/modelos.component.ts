import { Component, OnInit } from '@angular/core';
import { Modelos } from 'src/app/classes/modelos';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  public modelo: Modelos[] = [];

  constructor(private modeloService: ModeloService) { }

  ngOnInit() { this.getDataModelos() }

  public getDataModelos() {
    this.modeloService.getModelos().subscribe((dados) => {
      this.modelo = dados;
    });
  }

}
