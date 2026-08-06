import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  //Consructor para usar las rutas
  constructor(private router: Router, private authService:AuthService){}



  // Variable para almacenar Correo
  email: string = '';

  // Variable para almacenar Contraseña
  password: string = '';
  

  // Método que será ejecutado al presionar el botón ingresar

  login():void{
    const autenticado = this.authService.iniciarSesion(this.email, this.password);
    
    if (!autenticado) {
      alert('correo o contraseña incorrectos');
      return;
    }

    const usuario=this.authService.obtenerUsuario(); 
    alert(`Bievenido ${usuario?.nombre}\n rol:${usuario?.rol}`);
  
    this.router.navigate(['/dashboard']);
  }

  
goToRegister(): void {
      this.router.navigate(['/register']);
    }
}