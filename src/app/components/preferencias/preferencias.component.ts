import { FormsModule, NgModel, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormArray } from "@angular/forms";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

// interface Register {
//   nombre: string;
//   apellido: string;
//   username: string;
//   correo: string;
//   password: string;

// }

@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass, NgFor],
  templateUrl: './preferencias.component.html',
  styleUrl: './preferencias.component.css'
})
export class PreferenciasComponent {

  // registerForm: Register = {
  //   nombre: '',
  //   apellido: '',
  //   username: '', 
  //   correo: '',
  //   password: '',
  // }

  fb = new FormBuilder();
  formRegistro: any

  constructor(){
    this.formRegistro = this.fb.nonNullable.group({
      nombre: ['', [Validators.required, Validators.pattern(this.regSoloLetras)]],
      apellido: ['', [Validators.required, Validators.pattern(this.regSoloLetras)]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.pattern(this.regUsername)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.regPassword)]],
      preferencias: this.fb.array([
        this.fb.control('')
      ])
    });
    console.log(this.formRegistro)
  }

  agregarPreferencia(){
    this.preferencias.push(this.fb.control(''))
  }

  removePreferencia(){
    this.preferencias.removeAt(this.preferencias.length -1)
  }

  get preferencias(){
    return this.formRegistro.get("preferencias") as FormArray;
  }

  hasErrors(controlName: string, errorType: string){
    return this.formRegistro.get(controlName)?.hasError(errorType) && this.formRegistro.get(controlName)?.touched
  }

  verPassword(password: HTMLElement){
    let change = password.children[0] 
    let eyePassword = password.children[1].children[0]
    // console.log(password.children[1].children[0]);
    if (change.attributes[1].value == 'password') {
      change.setAttribute( "type", "text")
      eyePassword.className = 'bi bi-eye'
    }else{
      change.setAttribute( "type", "password" )
      // eyePassword.classList.remove('bi bi-eye')
      // eyePassword.classList.add('bi bi-eye-slash')
      eyePassword.className = 'bi bi-eye-slash'
      
    }
  }

  regSoloLetras = '^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$'
  regUsername = '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ]+$'
  regCorreo = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
  regPassword = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()+\\-=\\[\\]{};':\"\\\\|,.<>\\/?])(?=.*[a-zA-Z0-9!@#$%^&*()+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).*$";
  // regTelefono = '^[0-9]+$'

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.formRegistro.value);
  }
}
