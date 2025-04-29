import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegUsuComponent } from './reg-usu/reg-usu.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InfoRecursoComponent } from './info-recurso/info-recurso.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reg_usuario', component: RegUsuComponent },
  { path: 'homeAdmin', component: HomeAdminComponent },
  { path: 'recurso/:recursoId', component: InfoRecursoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } /*Cuando en la url sea cualquier cosa */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled' //Junto con el anchorScrolling se usa para habilitar el scroll automático. (para la navegación a fragmentos)
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
