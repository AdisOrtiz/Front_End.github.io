import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  rolUsu: string = '';
  correoUsu: string = '';
  menuVisible = false;
  recursoEspec: boolean = false;
  recurso_Espc_perfil: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    this.rolUsu = this.auth.getRol(); // obtiene el rol (ej. 'admin' o 'cliente')
    this.correoUsu = this.auth.getUsername();
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const ruta = event.urlAfterRedirects;
  
        // Cambia dinámicamente estilos, íconos, enlaces según la ruta
        if (ruta.includes('homeAdmin')) {
          this.rolUsu = 'admin';
        } else if (ruta.includes('homeCliente')) {
          this.rolUsu = 'cliente';
        }
  
        // Agrega lógica adicional para otras rutas específicas
        if (ruta.includes('recurso') || ruta.includes('editarRecurso') || ruta.includes('agregarRecurso')) {
          // Cambia color, ícono, etc.
          this.recurso_Espc_perfil = true;
          this.recursoEspec = true;
        } else {
          this.recursoEspec = false;
          this.recurso_Espc_perfil = false;
        }
      }
    });
  //   this.router.events.subscribe(() => {
  //     this.rutaActual = this.router.url;

  //     // Define los estilos o comportamientos según la ruta
  //     this.esAdmin = this.rutaActual.includes('homeAdmin');
  //     this.esCliente = this.rutaActual.includes('homeCliente');
  //     /*Verifica si la URL actual contiene ciertas palabras clave, 
  //     para saber si el usuario está en la página del administrador (homeAdmin) o en la del cliente (homeCliente). Según eso, activa o desactiva banderas booleanas. */
  //   });
  }
  
  // Este decorador escucha eventos globales del documento, en este caso cualquier clic.
  // '$event' representa el evento MouseEvent que Angular inyecta automáticamente.
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
  // Convertimos el target del evento (el elemento que se clickeó) a HTMLElement
  // para poder usar métodos como `closest()`.
  const target = event.target as HTMLElement;

  // Verificamos si el elemento clickeado o alguno de sus padres tiene el ID 'perfil-icon',
  // es decir, si el usuario hizo clic en el ícono de perfil.
  const clickedOnPerfil = target.closest('#perfil-icon');

  // Verificamos si el elemento clickeado o alguno de sus padres tiene la clase 'menu',
  // es decir, si el usuario hizo clic dentro del menú desplegable.
  const clickedOnMenu = target.closest('.menu');

  // Si NO se hizo clic ni en el ícono de perfil ni dentro del menú,
  // entonces asumimos que se hizo clic fuera del menú, y lo cerramos.
    if (!clickedOnPerfil && !clickedOnMenu) {
      this.menuVisible = false;
    }
  }

  //Alterna el menú cuando se hace clic en el icono de perfil
  alternarMenu(event: Event) {
    event.stopPropagation();// Detiene que el click cierre el menú
    this.menuVisible = !this.menuVisible;
  }

  // Cierra el menú al hacer clic en otro enlace dentro del mismo contenedor
  cerrarMenu() {
    this.menuVisible = false;
  }

  logout() {
    this.auth.logout();// Cierra sesión usando el servicio de autenticación
  }
}
