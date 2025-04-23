import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup; //formLogin es de tipo FormGroup

  //usuarioReg: string = 'Adis'; //Es el nombre del ejemplo que viene del "back" - Hace parte del ejeplo de la 1ra forma de setear un campo
  usuarioActivo: any = {
    correo: 'adispatriciaortizgomez@gmail.com',
    contra: 'PRUEBA123'
  }

  constructor( private form: FormBuilder ){
    this.formLogin = this.form.group({
      email: ['',[Validators.required, Validators.email]],
      pass: ['',[Validators.required, Validators.minLength(6)]]
      //Un campo puede no tener validadores, ej: id: ['']
    })
  }

  ngOnInit(): void { //Se ejecuta en el inicio
    //*** ------- ***
    //  Si al iniciar la página no quiero que un campo tenga validaciones por x razón, hago lo sieguiente:
    this.formLogin.get('email')?.clearValidators(); //Limpia/quita las validaciones del campo email.
    this.formLogin.get('email')?.updateValueAndValidity();//Actualiza los valores/validaciones

    //*** ------- ***
    // 1 forma se setear/ingresar_valor a unos campos
    //Ejemplo: Traigo nombre del back end y lo asigno a un campo, además que lo inhabilito
    // --this.formLogin.get('email')?.setValue(this.usuarioReg); //Del formulario formLogin obtengo el campo email y le asigno el valor que está en la varible usuarioReg
    // --this.formLogin.get('email')?.disable();//Coloca el campo desabilitado. El ? es por si viene undefine no salga error

    //*** ------- ***
    // Otra forma de settear valor a un campo
    this.formLogin.patchValue({//Con patchValue se le pueden asignar valores a los campos de una forma más facil
      email: this.usuarioActivo.correo,
      pass: this.usuarioActivo.contra
    })
    this.formLogin.get('email')?.disable();
    this.formLogin.get('pass')?.disable();
  }

  enviar(){
    console.log(this.formLogin);
  }

  hayError(nomControl:string, tipoError: string){
    return this.formLogin.get(nomControl)?.hasError(tipoError) && this.formLogin.get(nomControl)?.touched;
  }
}
