import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  formLogin: FormGroup; //formLogin es de tipo FormGroup

  constructor( private form: FormBuilder ){
    this.formLogin = this.form.group({
      email: ['',[Validators.required, Validators.email]],
      pass: ['',[Validators.required, Validators.minLength(5)]]
      //Un campo puede no tener validadores, ej: id: ['']
    })
  }

  enviar(){
    console.log(this.formLogin);
  }

  hayError(nomControl:string, tipoError: string){
    return this.formLogin.get(nomControl)?.hasError(tipoError) && this.formLogin.get(nomControl)?.touched;
  }
}
