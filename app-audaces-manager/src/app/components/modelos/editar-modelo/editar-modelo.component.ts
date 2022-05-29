import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modelos } from 'src/app/classes/modelos';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.scss']
})
export class EditarModeloComponent implements OnInit {

  public edicaoDeModelos: Modelos[] = [];

  public editaModelo: Modelos = { id: 4, nome: '', colecao: '', responsavel: '' };

  constructor(
    private modeloService: ModeloService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const modelo_id = this.route.snapshot.paramMap;
    const id = Number(modelo_id.get('modeloId'));
    const modeloId = this.modeloService.goToId(id).subscribe();
  }

  public editModelos() {
    this.modeloService.putModelos(this.editaModelo).subscribe(() => {
      alert('Modelo Alterado');
    });
  }
  public deleteModelos(num: number) {
    this.modeloService.deleteModelos(num).subscribe(() => {
      alert('Modelo Deletado');
    });
  }
}
