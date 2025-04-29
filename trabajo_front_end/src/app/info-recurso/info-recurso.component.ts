import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listaRecursos, Recurso } from '../home-admin/recursos.mock';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-info-recurso',
  templateUrl:'./info-recurso.component.html',
  styleUrls: ['./info-recurso.component.css']
})
export class InfoRecursoComponent implements OnInit{
  recurso?: Recurso;
  listRecurso: Recurso[] = listaRecursos; /*listRecurso es una variable que va a ser de tipo Recurso(es un objeto(interfas)) y va a ser igual al objeto listaRecursos que contiene toda la información*/
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

  constructor(private _route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.recurso = this.listRecurso.find(recur => recur.id == params['recursoId']);/*a la variable recurso se le asigna lo que traiga listRecurso (que va a recorrer todo el objeto (por el .find))listaRecursos donde el recursoId del objeto sea igual al id que se le pase por parametros*/

    })
  }

  alternarMenu(event: MouseEvent) {
    event.stopPropagation(); // Detiene que el click cierre el menú
    this.menuVisible = !this.menuVisible;
  }

  cerrarMenu(){
    this.menuVisible = false;
  }

  logout() {
    this.auth.logout();
  }
}
