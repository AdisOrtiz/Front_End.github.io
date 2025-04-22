import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup; //formLogin es de tipo FormGroup

  constructor( private form: FormBuilder ){
    this.formLogin = this.form.group({
      email: ['',[Validators.required, Validators.email]],
      pass: ['',[Validators.required, Validators.minLength(6)]]

    })
  }

  enviar(){
    console.log(this.formLogin);
  }

  hasErrors(controlName:string, tipoError: string){
    return this.formLogin.get(controlName)?.hasError(tipoError) && this.formLogin.get(controlName)?.touched;
  }
}
