import { Routes } from '@angular/router';

// importación del componente de login
import { LoginComponent } from './pages/login/login';

// definición de las rutas de la aplicación
export const routes: Routes = [
  // ruta principal de la aplicación
  {
    path: '',
    component: LoginComponent,
  },
];
