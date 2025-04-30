import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabajo_front_end';
  

  constructor(public router: Router) {}

  mostrarHeader(): boolean {
    const rutas = ['/','/reg_usuario'];//Rutas en donde no quiero mostrar el header
    return !rutas.includes(this.router.url);//this.router.url devuelve la ruta actual
    //.includes(this.router.url) Verifica si la URL actual está en rutas
    /*
    El ! (signo de exclamación) niega el resultado:
    - Si sí está (es decir, true), lo niega → false → no muestra el header.
    - Si no está, lo niega → true → sí muestra el header.
 */
  }
}
