import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UsuarioLogin } from './../models/UsuarioLogin'
import { Usuario } from '../models/Usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'  // visivel 
})
export class UsuarioService {

  urlDeploy: string = environment.api

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }


  ///////////// cadastro de usuario ///////////////////
  cadastrar(usuario: Usuario): Observable<Usuario> {
    const dto = {
      nome: usuario.nome,
      usuario: usuario.usuario,
      senha: usuario.senha,
      foto: usuario.foto
    };
  
    return this.http.post<Usuario>(`${this.urlDeploy}/usuarios/cadastrar`, dto)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }


  
  login(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>(`${this.urlDeploy}/usuarios/logar`, usuarioLogin)
  }

  getById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlDeploy}/usuarios/${id}`, this.token)
  }


  isAuth() {
    let ok: boolean = false;
    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }

  
}
