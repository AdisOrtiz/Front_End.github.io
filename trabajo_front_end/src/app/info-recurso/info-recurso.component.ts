import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listaRecursos, Recurso } from '../home-admin/recursos.mock';

@Component({
  selector: 'app-info-recurso',
  templateUrl: './info-recurso.component.html',
  styleUrls: ['./info-recurso.component.css']
})
export class InfoRecursoComponent implements OnInit{
  recurso?: Recurso;
  listRecurso: Recurso[] = listaRecursos; /*listRecurso es una variable que va a ser de tipo Recurso(es un objeto(interfas)) y va a ser igual al objeto listaRecursos que contiene toda la información*/

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.recurso = this.listRecurso.find(recur => recur.id == params['recursoId']);/*a la variable recurso se le asigna lo que traiga listRecurso (que va a recorrer todo el objeto (por el .find))listaRecursos donde el recursoId del objeto sea igual al id que se le pase por parametros*/

    })
  }
}
