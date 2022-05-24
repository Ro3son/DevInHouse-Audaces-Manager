import { Component, OnInit, Input } from '@angular/core';
import { Colecoes } from 'src/app/classes/colecoes';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-listar-colecoes',
  templateUrl: './listar-colecoes.component.html',
  styleUrls: ['./listar-colecoes.component.scss'],
})
export class ListarColecoesComponent implements OnInit {

  @Input() colecoes: Colecoes[] = [];

  constructor() {}

  ngOnInit() { console.log(this.colecoes) }
 
}
