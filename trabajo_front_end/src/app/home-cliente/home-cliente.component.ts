import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { listaRecursos } from '../home-admin/recursos.mock';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent{
  recursoList = listaRecursos; //Lista de recursos a mostrar
}
