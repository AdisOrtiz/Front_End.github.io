import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { listaRecursos } from '../home-admin/recursos.mock';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit{
  recursoList = listaRecursos; //Lista de recursos a mostrar
  menuVisible = false; //Controla la visibilidad del menú

  correoUsu: string = '';
  rolUsu: string = '';

  constructor(private auth: AuthService, private _auth: AuthService){}

  ngOnInit() {
    // Al inicializar el componente, obtenemos los datos del usuario autenticado
    const usuario = this.auth.usuarioActual;
    if (usuario) {
      this.correoUsu = usuario.username;
      this.rolUsu = usuario.rol;
    }
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
  alternarMenu(event: MouseEvent) {
    event.stopPropagation(); // Detiene que el click cierre el menú
    this.menuVisible = !this.menuVisible;
  }

  // Cierra el menú al hacer clic en otro enlace dentro del mismo contenedor
  cerrarMenu(){
    this.menuVisible = false;
  }

  logout() {
    this._auth.logout();// Cierra sesión usando el servicio de autenticación
  }
}
