import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-usu',
  templateUrl: './reg-usu.component.html',
  styleUrls: ['./reg-usu.component.css']
})
export class RegUsuComponent {
  formRegUsu: FormGroup;
  mostrarPass: boolean = false;

  constructor( private formReg: FormBuilder, private router: Router){
    this.formRegUsu = this.formReg.group ({
      nomComplet: ['',Validators.required],
      correo: ['',[Validators.required, Validators.email]],
      contra: ['',[Validators.required, Validators.minLength(5)]]
    })
  }

  hayError(nomError: string, tipoError: string) {
    return this.formRegUsu.get(nomError)?.hasError(tipoError) && this.formRegUsu.get(nomError)?.touched;
  }

  mostrarConstrasena(){
    this.mostrarPass = !this.mostrarPass;
  }
  
  regUsuario(){
    if(this.formRegUsu.valid) {
      const usuarioNuevo = this.formRegUsu.value;
  
      const nuevoUsuario = {
        username: usuarioNuevo.correo,      // Usamos 'username' para que coincida con AuthService
        password: usuarioNuevo.contra,
        rol: 'cliente'
      };
  
      // Leer usuarios previamente registrados desde localStorage
      const usuariosRaw = localStorage.getItem('usuarios_registrados');
      const usuarios = usuariosRaw ? JSON.parse(usuariosRaw) : [];
  
      // Agregar el nuevo usuario a la lista
      usuarios.push(nuevoUsuario);
  
      // Guardar la lista actualizada en localStorage
      localStorage.setItem('usuarios_registrados', JSON.stringify(usuarios));
  
      alert('Usuario registrado correctamente. Ahora puedes iniciar sesión.');
      this.router.navigate(['/login']);
    } else {
      this.formRegUsu.markAllAsTouched(); // Muestra errores en campos no válidos
    }
  }
}
