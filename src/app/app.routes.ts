import { Routes } from '@angular/router';

// importación del componente de login
import { LoginComponent } from './pages/login/login';
import {RegisterComponent} from "./pages/register/register";
import { DashboardComponent } from './pages/dashboard/dashboard';
import {UsersComponent} from './pages/users/users';

// definición de las rutas de la aplicación
export const routes: Routes = [
  // ruta principal de la aplicación

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
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

  //Ruta del componente Dashboard

  {
    path: 'dashboard',
    component: DashboardComponent

  },

  //ruta para el componente de usuario
  {
    path: 'users',
    component: UsersComponent
  }
];
