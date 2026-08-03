import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  usuario: string= 'Administrador';
  rol: string='Administrador del sistema';

/** Variable que simula as estadisticas creadas en el dashboard */
Estadisticas={
  Usuario:120,
  Roles:8,
  Cursos:24,
  Aprendices:560
};
grafica=[
  {
    mes: 'enero',
    valor:80
  },
  {
    mes:'febrero',
    valor:45

  },
  {
    mes: 'marzo',
    valor:70
  },
  {
    mes: 'abril',
    valor:70
  },
  {
    mes:'mayo',
    valor:60
  },
  {
    mes:'junio',
    valor: 88
  },
];

usuarios=[
  {
    id: 1,
    nombre: 'juan perez',
    correo: 'juan@gmail.com',
    rol: 'instructor',
    estado: 'activo'
  },

   {
    id: 2,
    nombre: 'Maria gomez',
    correo: 'maria@gmail.com',
    rol: 'aprendiz',
    estado: 'inactivo'
  },

   {
    id: 3,
    nombre: 'carlos rodriguez ',
    correo: 'carlos@gmail.com',
    rol: 'administrador',
    estado: 'activo'
  },

   {
    id: 4,
    nombre: 'laura sanchez',
    correo: 'laura@gmail.com',
    rol: 'instructor',
    estado: 'activo'
  },

   {
    id: 5,
    nombre: 'fabian barreto',
    correo: 'fabian@gmail.com',
    rol: 'aprendiz',
    estado: 'inactivo'
  },

];

constructor(){
  console.log("dashboard cargado correctamente")
}

obtenerToTALUsuarios():number{
  return this.usuarios.length;
}


  mostrarMensaje():void {
    alert('Bienvenido al Dashboard del sistema');
  }
}
