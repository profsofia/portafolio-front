import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  apiProyect="http://localhost:8080/api/practices";
  constructor(private http : HttpClient) {}

  //lista
  obtenerProyect():Observable <any[]>{
    return this.http.get<any[]>(`${this.apiProyect}`);
  }
  editarProyect(id: number, portfolio: any):Observable <Object>{
    return this.http.put(`${this.apiProyect}/${id}`, portfolio);
  }
  eliminarProyect(id: number):Observable <Object>{
    return this.http.delete(`${this.apiProyect}/${id}`);
  }
  //guardar
  guardarProyect(portafolio: any):Observable <Object>{
    return this.http.post(`${this.apiProyect}`, portafolio);
  }
}
