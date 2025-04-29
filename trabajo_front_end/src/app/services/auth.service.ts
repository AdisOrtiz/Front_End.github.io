import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarios = [
    {username: 'admin@prueba.co', password: 'admin123', rol: 'admin'},
    {username: 'cliente@prueba.co', password: 'cliente123', rol:'cliente'}
  ];

  // Almacena el usuario actualmente autenticado
  public usuarioActual: any = null;

  constructor(private router: Router) {
    // Al iniciar el servicio, intenta cargar usuario desde localStorage
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      // Si existe, lo convierte de JSON a objeto y lo asigna a usuarioActual
      this.usuarioActual = JSON.parse(usuarioGuardado);
    }
   }

  login(usuname: string, pass: string): boolean {
    // Busca un usuario que coincida con el username y password ingresados
    const user = this.usuarios.find(us => us.username === usuname && us.password === pass);
    if (user) {
      // Si encuentra, guarda el usuario en memoria y en localStorage
      this.usuarioActual = user;
      localStorage.setItem('usuario', JSON.stringify(user)); // persistencia

      return true; // Login exitoso
    }
    return false; // Login fallido
  }

  //Cerrar sesion
  logout() {
    // Limpia el usuario de la sesión
    this.usuarioActual = null;

    // Elimina al usuario guardado en localStorage
    localStorage.removeItem('usuario');

    // Redirige al login (ruta raíz en este caso)
    this.router.navigate(['']);
  }

  /**
   * Verifica si hay un usuario autenticado
   * @returns true si hay usuarioActual, false si no
   */

  isAuthenticated(): boolean {// Está autenticado
    return this.usuarioActual !== null;
  }

  /**
   * Obtiene el rol del usuario actual
   * @returns el rol como string, o cadena vacía si no hay usuario
   */
  getRol(): string {
    return this.usuarioActual?.rol || '';
  }

  /**
   * Obtiene el nombre de usuario (correo) del usuario actual
   * @returns el username como string, o cadena vacía si no hay usuario
   */
  getUsername(): string {
    return this.usuarioActual?.username || '';
  }
}
