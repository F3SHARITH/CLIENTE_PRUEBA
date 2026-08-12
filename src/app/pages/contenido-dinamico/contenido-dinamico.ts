import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface card{
  imagen:string;
  texto:string;
  boton:string;
}

interface SubSeccion{
  titulo: string;
  texto: string;
  imagen: string;
}

@Component({
  selector: 'app-contenido-dinamico',
  imports: [CommonModule],
  templateUrl: './contenido-dinamico.html',
  styleUrl: './contenido-dinamico.css',
})
export class ContenidoDinamicoComponent {
  cards: card[]=[
    {
      imagen:'https://picsum.photos/id/1015/600/400',
      texto:'conoce nuestros cursos de formación',
      boton:'ver cursos'
    },
    {
      imagen:'https://picsum.photos/id/1016/600/400',
      texto:'Aprende nuevas tegnologias de desarrollo',
      boton:'mas informacion'
    },
    {
      imagen:'https://picsum.photos/id/1018/600/400',
      texto:'descubre nuestro programa de formacion',
      boton:'ver programas'
    },
    {
      imagen:'https://picsum.photos/id/1025/600/400',
      texto:'Conoce las oportunidades disponibles',
      boton:'conocer mas'
    },
    {
      imagen:'https://picsum.photos/id/1035/600/400',
      texto:'Explora nuestros recursos educativos',
      boton:'Explorar'
    },
        {
      imagen:'https://picsum.photos/id/1039/600/400',
      texto:'Explora nuestros recursos educativos',
      boton:'Explorar 2'
    },
    {
      imagen:'https://picsum.photos/id/1058/600/400',
      texto:'Explora nuestros recursos educativos',
      boton:'Explorar 3'
    }
  ];


  subsecciones: SubSeccion[]=[
    {
      titulo:'formacion profesional',
      texto:'encuentre los programas de frmacion diseñados para fortalecer tus conocimientos',
      imagen:'https://picsum.photos/id/1043/600/400'
    },
    {
      titulo:'tegnologia',
      texto:'aprende sobre desarrolo de sofware programacion bases de datos y nuevas tegnologias',
      imagen:'https://picsum.photos/id/180/800/500'
    },
    {
      titulo:'innovacion',
      texto:'conoce proyectos y herramientas orientadas a la inovacion y transformacion digital',
      imagen:'https://picsum.photos/id/48/800/500'
    }
  ];

  ejecutarAccion(card:card):void{
    alert(`seleccionaste: ${card.boton}`)
  }
}
