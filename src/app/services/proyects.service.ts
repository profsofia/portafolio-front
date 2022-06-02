import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  apiProyect= environment.api;
  constructor(private http : HttpClient) {}

  //lista
  obtenerProyect():Observable <any[]>{
    return this.http.get<any[]>(`${this.apiProyect}/practices`);
  }
  editarProyect(id: number, portfolio: any):Observable <Object>{
    return this.http.put(`${this.apiProyect}/practices/${id}`, portfolio);
  }
  eliminarProyect(id: number):Observable <Object>{
    return this.http.delete(`${this.apiProyect}/practices/${id}`);
  }
  //guardar
  guardarProyect(portafolio: any):Observable <Object>{
    return this.http.post(`${this.apiProyect}/practices`, portafolio);
  }
}
