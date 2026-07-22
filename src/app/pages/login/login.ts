import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  //SE CREA VARIABLE PARA ALMACENAR EL CORREO DEL USUARIO
  email: string = '';

  //SE CREA VARIABLE PARA ALMACENAR LA CONTRASEÑA DEL USUARIO
  password: string = '';

// CONTRSEÑA QUEMADA PARA PRUEBAS
  private readonly contraseña_correcta: string = '123456';

  // METODO QUE SE EJECUTA CUANDO EL USUARIO HACE CLIC EN EL BOTON DE INGRESO
  login(): void {
    if (this.password === this.contraseña_correcta) {
         console.log('correo:', this.email);
         console.log('password:', this.password);
         alert('la contraseña es correcta.\n\n' + 'la contraseña ingresada fue: ' + this.password);
         window.location.href = 'https://www.google.com';
    }else{
      alert('la contraseña no coincide.\n\n' + 'la contraseña ingresada fue: ' + this.password);
    }
   

  
  }
}
