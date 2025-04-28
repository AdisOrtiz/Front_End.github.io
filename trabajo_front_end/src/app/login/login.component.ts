import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  formLogin: FormGroup; //formLogin es de tipo FormGroup
  mostrarPass: boolean = false;
  username: string = '';
  password: string = '';
  error: string = '';

  constructor( private form: FormBuilder, private authService: AuthService, private router: Router ){
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

  mostrarContrasena() {
    this.mostrarPass = !this.mostrarPass;
  }

  login(){
    if (this.authService.login(this.username, this.password)) {
      const rol = this.authService.getRol();
      if (rol === 'admin') {
        this.router.navigate(['/homeAdmin']);
      } else if (rol === 'cliente') {
        this.router.navigate(['/homeCliente']);
      }
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
