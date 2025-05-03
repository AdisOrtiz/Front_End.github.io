import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegUsuComponent } from './reg-usu/reg-usu.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InfoRecursoComponent } from './info-recurso/info-recurso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegUsuComponent,
    LoginComponent,
    HomeAdminComponent,
    InfoRecursoComponent,
    HomeClienteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule //Formularios de tipo reactivo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
