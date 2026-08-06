import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { DatePipe, WeekDay } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit, OnDestroy{
  constructor (private Router:Router) {}
  nombreSistema:String='sistema ADSO';
  descripcionSistema: string='plataforma academica para la gestion institucional'
  usuario: string ='';
  rol:string=''
  fechaActual = signal('');
  horaActual = signal('');

  
  private intervalo:any;

  ngOnInit(): void {
    this.usuario=localStorage.getItem('nombre')??'';
    this.rol=localStorage.getItem('rol')??'';
    this.actualizarFechaHora();
    this.intervalo= setInterval(()=>{
      this.actualizarFechaHora();
    },1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  actualizarFechaHora():void{
    const ahora = new Date();
    this.fechaActual.set(ahora.toLocaleDateString(
      'es-CO',{
        
          weekday:'long',
          day:'2-digit',
          month:'long',
          year:'numeric'        
      }
    ));
    this.horaActual.set(ahora.toLocaleTimeString(
      'es-CO',
      {
        hour12:false
      }
    ));
  }

  cerrarSesion():void{
    localStorage.removeItem('usuarioLogeado');
    this.Router.navigate(['/login']);
    alert('Aqui se cerro sesión');
  }
}
