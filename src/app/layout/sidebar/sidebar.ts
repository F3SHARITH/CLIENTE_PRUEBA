import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem{
  icono:string;
  nombre:string;
  ruta: string;
  roles: string[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
  constructor(){
    this.rolUsuario=localStorage.getItem('rol')??'Aprendiz';
    this.cargarMenu();
  }

  rolUsuario:string='';
  menuVisible: MenuItem[]=[];
  menu:MenuItem[]=[
    {
      icono:'🏡',
      nombre:'Dashboard',
      ruta: '/dashboard',
      roles:[
        'Administrador'
      ]
    },
    {
      icono:'👩',
      nombre: 'usuarios',
      ruta: '/users',
      roles:[
        'Administrador',
        'instructor'
      ]
    },
    {
      icono:'🛡️',
      nombre:'roles',
      ruta: '/roles',
      roles:[
        'Administrador'
      ]

    },
    {
      icono:'📚',
      nombre:'cursos',
      ruta:'/cursos',
      roles:[
        'Administrador',
        'Instructor',
        'Aprendiz'
      ]

    }

  ];


  private cargarMenu():void{
    this.menuVisible=this.menu.filter
    (opcion=>opcion.roles.includes(this.rolUsuario));
  }
}
