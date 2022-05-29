import { Component, Input } from '@angular/core';
import { Modelos } from 'src/app/classes/modelos';

@Component({
  selector: 'app-listar-modelos',
  templateUrl: './listar-modelos.component.html',
  styleUrls: ['./listar-modelos.component.scss']
})
export class ListarModelosComponent {

  @Input() modelos: Modelos[] = [];

  constructor() { }

}
