import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarios = [
    {username: 'admin@prueba.co', password: 'admin123', rol: 'admin'},
    {username: 'visualizador@prueba.co', password: 'visual123', rol:'cliente'}
  ];

  public usuarioActual: any = null;

  constructor(private router: Router) { }

  login(usuname: string, pass: string): boolean {
    const user = this.usuarios.find(us => us.username === usuname && us.password === pass);
    if(user) {
      this.usuarioActual = user;
      return true;
    }
    return false;
  }

  logout(){//Cerrar sesion
    this.usuarioActual = null;
    this.router.navigate(['']);//Redirecciona al Login
  }

  isAuthenticated(): boolean {// Está autenticado
    return this.usuarioActual !== null;
  }

  getRol(): string {
    return this.usuarioActual?.rol || '';
  }
}
