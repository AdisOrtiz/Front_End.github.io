import { Component } from '@angular/core';
import { listaRecursos } from '../home-admin/recursos.mock';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  recursoList = listaRecursos;

  constructor(private auth: AuthService){}

  logout() {
    this.auth.logout();
  }
}
