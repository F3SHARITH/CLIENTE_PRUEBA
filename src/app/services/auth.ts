import { Service } from '@angular/core';
import { UsuarioAuth} from '../models/usuario-auth';
import { Injectable } from '@angular/core';

interface UsuarioSistema extends UsuarioAuth{
    password:string;
}


@Injectable({
    providedIn:'root'
})

export class AuthService {
    private readonly STORAGE_KEY='usuarioSesion';
    
    private usuariosSistema:UsuarioSistema[]=[
    {
        nombre:'ADMINISTRADOR',
        correo: 'admin@gmail.com',
        password: '123456',
        rol: 'Administrador'
    },
    {
        nombre:'SHARITH BERMUDEZ',
        correo: 'sharith@gmail.com',
        password: '123456',
        rol: 'Aprendiz'
    },
    {
        nombre:'DANIEL SUA',
        correo: 'dani@gmail.com',
        password: '123456',
        rol: 'Instructor'
    }
]


    constructor(){}

    //metodo para guardarc la informacion

    iniciarSesion(Correo:string, password:string):boolean{
    const usuario=this.usuariosSistema.find(
    u=>u.correo===Correo
    );

    if (!usuario) {

        return false;     
    }
    if (usuario.password!==password){

        return false;
    }

    const UsuarioAuth:UsuarioAuth={
        nombre:usuario.nombre,
        correo:usuario.correo,
        rol: usuario.rol

    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(UsuarioAuth));
    return true;
    }

cerraSesion():void{
    localStorage.removeItem(this.STORAGE_KEY);
}
// METODO PARA SABER SI ES UN USUARIO AUTENTICADO
estaAutenticado():boolean{
    return localStorage.getItem(this.STORAGE_KEY)!=null;

}

//metodo que obtiene el usuario autenticado
obtenerUsuario():UsuarioAuth|null{
    const usuario= localStorage.getItem(this.STORAGE_KEY);
    if (!usuario) {
        return null;
    }
    return JSON.parse(usuario)
    }

    //metodo para obtener el rol 
    obtenerRol():string{
        return this.obtenerUsuario()?.rol ?? '';
    }

    //metodo obtener nombre
    obtenerNombre():string{
        return this.obtenerUsuario()?.nombre??'';
    }

}
