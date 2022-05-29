import { Component } from '@angular/core';
import { Modelos } from 'src/app/classes/modelos';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-cadastrar-modelo',
  templateUrl: './cadastrar-modelo.component.html',
  styleUrls: ['./cadastrar-modelo.component.scss']
})
export class CadastrarModeloComponent {

  public cadastroDeModelo: Modelos[] = [];

  public cadastraModelo: Modelos = { id: 0, nome: '', colecao: '', responsavel: '' };

  constructor(private modeloService: ModeloService) { }

  public postDataModelos() {
    this.modeloService.postModelos(this.cadastraModelo).subscribe((dados) => {
      this.cadastroDeModelo = dados.map((key) => {
        return new Modelos(key.id, key.nome, key.colecao, key.responsavel);
      });
    });
  }

}
