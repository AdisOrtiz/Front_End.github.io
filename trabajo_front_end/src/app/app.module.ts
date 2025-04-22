import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegUsuComponent } from './reg-usu/reg-usu.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InfoRecursoComponent } from './info-recurso/info-recurso.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegUsuComponent,
    LoginComponent,
    HomeAdminComponent,
    InfoRecursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule //Formularios de tipo reactivo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
