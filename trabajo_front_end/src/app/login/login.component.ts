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

  // Método de login sin backend
  regUsuario_login() {
    const datosLogin = this.formLogin.value;

    // Recupera el usuario registrado desde localStorage (si existe)
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario_registrado') || '{}');

    // Verifica si el correo y la contraseña coinciden
    if (
      datosLogin.email === usuarioGuardado.correo &&
      datosLogin.pass === usuarioGuardado.contra
    ) {
      // Guarda en localStorage que este usuario está logueado actualmente
      localStorage.setItem('usuario_logueado', JSON.stringify(usuarioGuardado));

      // Redirige según el rol (puedes ajustar esto como desees)
      if (usuarioGuardado.rol === 'admin') {
        this.router.navigate(['/homeAdmin']);
      } else {
        this.router.navigate(['/homeCliente']);
      }
    } else {
      // Si no coinciden, muestra error
      this.error = 'Correo o contraseña incorrectos';
    }
  }
  
}
