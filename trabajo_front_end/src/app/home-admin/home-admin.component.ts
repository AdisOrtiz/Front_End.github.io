import { Component } from '@angular/core';
import { listaRecursos } from '../home-admin/recursos.mock';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  recursoList = listaRecursos;
}
