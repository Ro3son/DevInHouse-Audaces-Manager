import { Component, Input } from '@angular/core';
import { Colecoes } from 'src/app/classes/colecoes';

@Component({
  selector: 'app-listar-colecoes',
  templateUrl: './listar-colecoes.component.html',
  styleUrls: ['./listar-colecoes.component.scss'],
})
export class ListarColecoesComponent {

  @Input() colecoes: Colecoes[] = [];

  constructor() {}
 
}
