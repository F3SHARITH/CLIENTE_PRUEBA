import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  nombreSistema: string = 'Sistema ADSO.'
  institucion: string = ' Servicio Nacional de Aprendizaje - SENA '
  version: string = '1.0.0'
  anio: number = new Date().getFullYear();
  desarrollador: string = 'Sharith Dayana Bermudez Ruiz'
}