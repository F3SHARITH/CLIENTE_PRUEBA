import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

interface usuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  rol: string;
  estado: boolean;
}

@Component({
  selector: 'app-users',
  imports: [FormsModule, NgForOf, NgIf],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent implements OnInit {
  id: Number = 0;
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  rol: string = 'Aprendiz';
  estado: boolean = true;

  /*listas de usuarios, un arreglo de usuario*/

  usuarios: usuario[] = [];
  //lista filtrada
  usuariosFiltrados: usuario[] = [];
  textoBusqueda: string = '';
  //IMPLEMENTACION DEL FILTRO
  filtroRol: string = '';
  // Id en edicion
  idEditar: number | null = null;


  //pagina actual 
  paginaActual: number=1;

  // cantidad de registros por pagina 
  registrosPorPagina: number=2;

  //lista que realmente muestra la tabla realmente paginada
  usuarioPaginados:usuario[]=[];

  //columna actualmente ordenada
  columnaOrden: string='';

  //direccion de orden 
  //true -> ascendente
  //false -> descendente

  ordenAscendente: boolean=true;



  mensaje: string = ''
  tipoMensaje: 'success' | 'error' | '' = '';

  //bandera para saber si se esta editando un usuario
  modoEdicion: boolean = false;

  ngOnInit(): void {
    this.cargarDatosIniciales();
    this.usuariosFiltrados = [...this.usuarios]
    this.actualizarPaginacion();

  }

  cargarDatosIniciales(): void {
    this.usuarios = [
      {
        id: 1,
        nombre: 'carlos',
        apellido: 'machado',
        correo: 'carlos@gmail.com',
        rol: 'Administrador',
        estado: true
      },
      {
        id: 2,
        nombre: 'angela',
        apellido: 'novoa',
        correo: 'angela@gmail.com',
        rol: 'Instructor',
        estado: true
      },
      {
        id: 3,
        nombre: 'jose',
        apellido: 'cantillo',
        correo: 'jose@gmail.com',
        rol: 'Aprendiz',
        estado: true
      }
    ]
  }

  validarCorreo(correo: string): boolean {
    const expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expresion.test(correo.trim());
  }

  correoExiste(correo: string, idUsuario: number | null = null): boolean {
    return this.usuarios.some
      (usuario => usuario.correo.toLowerCase() 
      === correo.toLowerCase() && 
      usuario.id !== idUsuario)
  }


  limpiarFormulario(): void {
    const respuesta = confirm('¿Dese limpiar el formulario?');
    if (!respuesta) {
      return
    } 3
    this.id = 0;
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.rol = 'Aprendiz';
    this.estado = true;
    this.mensaje = '';
  }

  registrarUsuario(): void {

    //validacion de campos
    if (this.nombre.trim() === '' ||
      this.apellido.trim() === '' ||
      this.correo.trim() === ''
    ) {
      this.tipoMensaje = 'error';
      this.mensaje = 'todos los campos son obligatorios';
      return
    }


    //validacion correo 
    if (!this.validarCorreo(this.correo)) {
      this.tipoMensaje = 'error';
      this.mensaje = 'el formato del correo es incorrecto.';
      return
    }

    //validar duplicado
    if (this.correoExiste(this.correo, this.idEditar)) {
      this.tipoMensaje = 'error';
      this.mensaje = 'El correo ya se encuentra registrado.';
      return
    }


            if (this.idEditar != null) {
      const usuariobuscado = this.usuarios.find(u => u.id == this.idEditar);

      if (usuariobuscado) {
        usuariobuscado.nombre = this.nombre;
        usuariobuscado.apellido = this.apellido;
        usuariobuscado.correo = this.correo;
        usuariobuscado.rol = this.rol;
        usuariobuscado.estado = this.estado;
      }
      this.idEditar = null;
      this.buscarUsuarios();
      alert('usuario actualizado')
      this.limpiarFormulario();
      return
    }

    /**se construye un nuevo
     *  objeto usuario utilizando
     *  la informacion ingresada 
     * en el formulario */

    const nuevoUsuario: usuario = {
      id: this.usuarios.length + 1,
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      rol: this.rol,
      estado: this.estado
    };
    /**agrega el nuevo objeto
     * al arreglo
     */

    this.usuarios.push(nuevoUsuario);
    this.buscarUsuarios();
    this.tipoMensaje = 'success';
    this.mensaje = 'usuario registrado correctamente.';

    this.limpiarFormularioAutomatico();

  }

  limpiarFormularioAutomatico(): void {
    this.id = 0;
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.rol = '';
    this.estado = true;
  }
  obtenerTotalUsuarios(): number {
    return this, this.usuarios, length;
  }

  buscarUsuarios(): void {
    this.usuariosFiltrados = this.usuarios.filter(usuario => {
      const coincideTexto =
        usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        usuario.apellido.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        usuario.correo.toLowerCase().includes(this.textoBusqueda.toLowerCase());

      const coincideRol =
        this.filtroRol === '' || usuario.rol == this.filtroRol;

        this.paginaActual=1

        if(this.columnaOrden!== ''){
          this.ordenar(this.columnaOrden);
         
        }
        this.actualizarPaginacion();

      return coincideTexto && coincideRol;
    });
  }

  editarUsuario(usuario: usuario): void {
    this.idEditar = usuario.id;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.correo = usuario.correo;
    this.rol = usuario.rol;
    this.estado = usuario.estado;

  }

  eliminarUsuario(id: number): void {
    const respuesta = confirm('¿Desea eliminar este usuarrio?');
    if (!respuesta) {
      return
    }
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id);
    this.buscarUsuarios();
  }

  actualizarPaginacion():void{
    const inicio=(this.paginaActual-1)*this.registrosPorPagina;
    const fin= inicio + this.registrosPorPagina;

    this.usuarioPaginados=this.usuariosFiltrados.slice(inicio,fin);

  }

  obtenerTotalPaginas():number{
    return Math.ceil(this.usuariosFiltrados.length/this.registrosPorPagina)
  }

  cambiarPagina(pagina:number):void{
    if(pagina<1 || pagina>this.obtenerTotalPaginas()){
      return
    }
    this.paginaActual=pagina;
    this.actualizarPaginacion()
  }
  siguientePagina():void{
    this.cambiarPagina(this.paginaActual+1)
  }
  anteriorPagina():void{
    this.cambiarPagina(this.paginaActual-1)
  }
  obtenerPaginas(): number[]{
    return Array.from({
      length: this.obtenerTotalPaginas()
    },(_,indice)=> indice+1);
  }


  ordenar(columna: string):void{
    if(this.columnaOrden===columna){
      this.ordenAscendente=!this.ordenAscendente;
    }else{
      this.columnaOrden=columna;
      this.ordenAscendente=true;
    }

    this.usuariosFiltrados.sort((a:usuario,b:usuario)=>{
      let valorA:any;
      let valorB:any;
      switch(columna){
        case 'id':
        valorA= a.id;
        valorB= b.id;
        break;
        case 'nombre':
          valorA= a.nombre.toLowerCase();
          valorB= b.nombre.toLowerCase();
          break;
        case 'apellido':
          valorA= a.apellido.toLowerCase();
          valorB= b.apellido.toLowerCase();
          break;
        case 'correo':
          valorA= a.correo.toLowerCase();
          valorB= b.correo.toLowerCase();
          break;
        case 'rol':
          valorA=a.rol.toLowerCase();
          valorB=b.rol.toLowerCase();
          break;
        case 'estado':
          valorA=a.estado? 1:0;
          valorB=b.estado? 1:0;
          break;
        default:
          return 0;
      }
      if (valorA<valorB){
        return this.ordenAscendente? -1:1;
      }
      if (valorA>valorB){
        return this.ordenAscendente? 1:-1
      }
      return 0; 
    });

    this.actualizarPaginacion();
  }
obtenerIconoOrden(columna:string):string{
    if(this.columnaOrden!==columna){
      return '↕';
    }
    return this.ordenAscendente ? '↑' : '↓';
  }
}