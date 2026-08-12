import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
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
  constructor(private authService: AuthService){
    this.rolUsuario= this.authService.obtenerRol();
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
      icono:'😁',
      nombre:'componente dinamico',
      ruta:'/contenido',
      roles:[
        'Administrador',
        'Instructor',
        'Aprendiz'
      ]

    },
    {
      icono:'🛩️',
      nombre:'Material',
      ruta:'/reservas',
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
