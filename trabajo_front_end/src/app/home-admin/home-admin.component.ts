import { Component, HostListener, OnInit } from '@angular/core';
import { listaRecursos } from '../home-admin/recursos.mock';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent{
  recursoList = listaRecursos; //Lista de recursos a mostrar
}
