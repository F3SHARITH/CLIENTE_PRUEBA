import { Routes } from '@angular/router';

// importación del componente de login
import { LoginComponent } from './pages/login/login';
import {RegisterComponent} from "./pages/register/register";
import { DashboardComponent } from './pages/dashboard/dashboard';
import {UsersComponent} from './pages/users/users';
import { LayoutComponent } from './layout/layout/layout';
import { authGuard } from './guads/auth-guard';
import { ContenidoDinamicoComponent } from './pages/contenido-dinamico/contenido-dinamico';
import { ReservaVuelosComponent } from './pages/vuelos/reserva-vuelos/reserva-vuelos';


// definición de las rutas de la aplicación
export const routes: Routes = [
  // ruta principal de la aplicación

  {
    path: '',
    component:LayoutComponent,
    canActivate:[
      authGuard
    ],
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'users',
        component:UsersComponent
      },
      {
        path:'contenido',
        component:ContenidoDinamicoComponent
      },
      {
        path:'reservas',
        component:ReservaVuelosComponent
      }
    ]
  },

  // ruta de componente login
  {
    path: 'login',
    component: LoginComponent,
  },

  // ruta de componente register
  {
    path: 'register',
    component: RegisterComponent,
  },




  
];
