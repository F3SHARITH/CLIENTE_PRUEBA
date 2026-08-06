import { Routes } from '@angular/router';

// importación del componente de login
import { LoginComponent } from './pages/login/login';
import {RegisterComponent} from "./pages/register/register";
import { DashboardComponent } from './pages/dashboard/dashboard';
import {UsersComponent} from './pages/users/users';
import { LayoutComponent } from './layout/layout/layout';
import { Component } from '@angular/core';
import { authGuard } from './guads/auth-guard';


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
