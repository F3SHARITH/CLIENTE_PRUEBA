import { Component } from '@angular/core';
// Módulo para formularios / de formularios.
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {

  /** Formulario principal del componente */

  registerForm: FormGroup;

  /** Constructor */

  constructor(private router: Router, private fb:FormBuilder) {
    this.registerForm = this.fb.group({
      /** Primer campo del formulario */
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      /** Segundo campo del formulario */
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      /** Tercer campo del formulario */
      correo: ['', [Validators.required, Validators.email]],
      /** Cuarto campo del formulario */
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),]],
      /** Quinto campo del formulario */
      confirmarPassword: ['', Validators.required],
      }, {
      validators: this.passwordsIguales,
      });
  }

  /** Métodos get para acceder a los datos en el HTML */
  get nombre(){
    return this.registerForm.get('nombre')
  }

  get apellido(){
    return this.registerForm.get('apellido')
  }
  
  get correo(){
    return this.registerForm.get('correo')
  }

  get password(){
    return this.registerForm.get('password')
  }

  get confirmarPassword(){
    return this.registerForm.get('confirmarPassword')
  }

  /** Método para validar que las contraseñas sean iguales */
  passwordsIguales(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmarPassword = form.get('confirmarPassword')?.value;

    if (password !== confirmarPassword) {
      return { passwordsNoCoinciden: true };
    }
    return null;
  }

  registroUsuario(): void {
    /** Validación si el formulario es válido */

    if(this.registerForm.invalid){
      /** Marca todos los campos que muestran error. */
      this.registerForm.markAllAsTouched();
      alert('Formulario inválido. Por favor, complete todos los campos correctamente.');
      return;
    }

    console.log(this.registerForm.value);
    alert('Usuario Registrado.');
    this.router.navigate(['/login']);
  }
}