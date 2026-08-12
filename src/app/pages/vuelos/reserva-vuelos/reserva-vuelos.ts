import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


interface vuelos{
  id: number;
  origen: string;
  destino: string;
  hora: string;
  precio: number;
  duracion: string;
}


@Component({
  selector: 'app-reserva-vuelos',
  imports: [ 
    CommonModule,
    MatCardModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './reserva-vuelos.html',
  styleUrl: './reserva-vuelos.css',
})
export class ReservaVuelosComponent {
  origen: string=''; 
  destino: string='';
  fechaSalida: Date |null=null;
  pasajeros: number =1;

  cargando:Boolean=false;
  progreso:number=0;

  columnas: string[]=[
  'origen',
  'destino',
  'hora',
  'duracion',
  'precio',
  'accion'
  ]

  vuelos: vuelos[]=[
    {
      id:1,
      origen: 'Bogota',
      destino: 'Medellin',
      hora: '8:30',
      precio: 180.000,
      duracion: '1h 05m'
    },
    {
      id:2,
      origen: 'Bogota',
      destino: 'Cartagena',
      hora: '10:15',
      precio: 210.000,
      duracion: '3h 45m'
    },
    {
      id:2,
      origen: 'Bogota',
      destino: 'Barranquilla',
      hora: '16:20',
      precio: 320.000,
      duracion: '1h 30m'
    },
    {
      id:3,
      origen: 'Bogota',
      destino: 'Santa Marta',
      hora: '8:30',
      precio: 200.000,
      duracion: '2h 50m'
    }

  ]
  constructor(){

  }
  buscarVuelos():void{
    if (this.origen.trim()===''){
      alert('por favor ingrse el destino')
      return;      
    }
    if (this.fechaSalida===null) {
      alert('por favor ingrese la fecha salida')
      return;
    }
    if (this.pasajeros<1) {
      alert('debe seleccionar almenos un pasajero')
      return;
    }

    this.cargando=true;
    this.progreso=0;
    this.progreso=25;
    setTimeout(()=>{
      this.progreso=75
    },1000);
    setTimeout(() => {
      this.progreso=1000
    }, 1500);
    setTimeout(() => {
      this.cargando=false
      alert('busqueda finalizada')
    }, 2000)
  }

  limpiarBusqueda():void{
    this.origen='';
    this.destino='';
    this.fechaSalida=null;
    this.pasajeros=1;
    this.progreso=0;
    this.cargando=false; 
  }

  reservar(vuelo:vuelos):void{
    alert(
      'vuelo seleccionado: n\n'+
      'origen:'+ vuelo.origen+'\n'+
      'destino:'+ vuelo.destino+'\n'+
      'hora:'+ vuelo.hora+'\n'+
      'duracion'+ vuelo.duracion+'\n'+
      'precio'+ vuelo.precio.toLocaleString('es-CO')
    );
  }
}
