import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent {

  public h1: string = 'Redefinir Senha';

  public paragraph: string = 'Digite o e-mail associado à sua conta e enviaremos instruções para redefinir sua senha.'

  public labelTextContent: string = 'Informe seu e-mail';

  public buttonTextContent: string = 'Enviar Recuperação';

  constructor(private fb: FormBuilder) { }

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
  });

  public onSubmit() {
    window.localStorage.setItem('Senha redefinida', JSON.stringify(this.form.value));
    window.location.reload();
  }
}
