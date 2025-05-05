import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tema } from '../models/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  private baseUrl: string = `${environment.api}/temas`

  constructor(private http: HttpClient) { }

  // Cabeçalho com token JWT no formato correto: Bearer <token>
  private get tokenHeader() {
    return {
      headers: new HttpHeaders().set('Authorization', `Bearer ${environment.token}`)
    }
  }

  getAll(): Observable<Tema[]> {
    return this.http.get<Tema[]>(this.baseUrl, this.tokenHeader)
  }

  getById(id: number): Observable<Tema> {
    return this.http.get<Tema>(`${this.baseUrl}/${id}`, this.tokenHeader)
  }

  post(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(this.baseUrl, tema, this.tokenHeader)
  }

  put(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>(`${this.baseUrl}/${tema.id}`, tema, this.tokenHeader)
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, this.tokenHeader)
  }

}
