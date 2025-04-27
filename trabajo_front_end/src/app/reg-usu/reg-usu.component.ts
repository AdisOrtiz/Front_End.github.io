import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-usu',
  templateUrl: './reg-usu.component.html',
  styleUrls: ['./reg-usu.component.css']
})
export class RegUsuComponent {
  formRegUsu: FormGroup;

  constructor( private formReg: FormBuilder){
    this.formRegUsu = this.formReg.group ({
      nomComplet: ['',Validators.required],
      correo: ['',[Validators.required, Validators.email]],
      contra: ['',[Validators.required, Validators.minLength(5)]]
    })
  }

  hayError(nomError: string, tipoError: string) {
    return this.formRegUsu.get(nomError)?.hasError(tipoError) && this.formRegUsu.get(nomError)?.touched;
  }
}
