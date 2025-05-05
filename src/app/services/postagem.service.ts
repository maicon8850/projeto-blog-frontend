import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  urlDeploy: string = environment.api
  
  constructor(private http: HttpClient) { }

  get tokenHeader(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders().set('Authorization', `Bearer ${environment.token}`)
    }
  }

  getAll(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`${this.urlDeploy}/postagens`, this.tokenHeader)
  }

  getById(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`${this.urlDeploy}/postagens/${id}`, this.tokenHeader)
  }

  //post(postagem: Postagem): Observable<Postagem>{
    //return this.http.post<Postagem>(`${this.urlDeploy}/postagens`, postagem, this.tokenHeader)
 // }

  //put(postagem: Postagem): Observable<Postagem>{
    //return this.http.put<Postagem>(`${this.urlDeploy}/postagens`, postagem, this.tokenHeader)
  //}

  post(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`${this.urlDeploy}/postagens`, postagem, this.tokenHeader)
  }
  
  put(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(`${this.urlDeploy}/postagens`, postagem, this.tokenHeader)
  }

  delete(id: number){
    return this.http.delete(`${this.urlDeploy}/postagens/${id}`, this.tokenHeader)
  }

}