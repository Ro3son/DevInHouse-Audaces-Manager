import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public h1: string = 'Sign In to Audaces'; 
  public h2: string = 'Insira suas credenciais para acessar sua conta';

  constructor() { }

  public form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  
  public onSubmit() {
    console.log(this.form.value);
  }
  
}
