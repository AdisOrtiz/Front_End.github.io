import { Component, HostListener } from '@angular/core';
import { listaRecursos } from '../home-admin/recursos.mock';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  recursoList = listaRecursos;
  menuVisible = false;
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedOnPerfil = target.closest('#perfil-icon');
    const clickedOnMenu = target.closest('#menu');

    if (!clickedOnPerfil && !clickedOnMenu) {
      this.menuVisible = false;
    }
  }

  constructor(private auth: AuthService, private _auth: AuthService){}

  alternarMenu(event: MouseEvent) {
    event.stopPropagation(); // Detiene que el click cierre el menú
    this.menuVisible = !this.menuVisible;
  }

  cerrarMenu(){
    this.menuVisible = false;
  }

  logout() {
    this._auth.logout();
  }
}
