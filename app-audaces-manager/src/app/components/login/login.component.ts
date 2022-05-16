import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public h1: string = 'Sign In to Audaces';
  public h2: string = 'Insira suas credenciais para acessar sua conta';

  constructor(private fb: FormBuilder) { }

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  public onSubmit() {
    console.log(this.form.value);
  }

}
