import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  //Consructor para usar las rutas
  constructor(private router: Router) {}

  // Variable para almacenar Correo
  email: string = '';

  // Variable para almacenar Contraseña
  password: string = '';
  
  private readonly password_correcta: string = '123456'; // Contraseña correcta para ejemplo
  private readonly email_correcto: string = 'sharith@gmail.com'; // Correo correcto para ejemplo

  // Método que será ejecutado al presionar el botón ingresar
  login():void{
    if ( this.email=== this.email_correcto) {
      console.log('Correo:', this.email);
     

      if(this.password === this.password_correcta){
         console.log('Contraseña:', this.password);
          alert('La contraseña es correcta.\n\n La contraseña ingresada fue: ' + this.password);
          alert('el email es correcto.\n\n el email ingresado fue: ' + this.email);   
         this.router.navigate(['/dashboard']);

      }else{
        alert('La contraseña no coincide. \n\n ' + ' El email ingresado fue: ' + this.password)
      }
     
    }else{
      alert('el email no coincide.\n\n el email ingresado fue: ' + this.email);
    }
  }
    goToRegister(): void {
      this.router.navigate(['/register']);
    }
}