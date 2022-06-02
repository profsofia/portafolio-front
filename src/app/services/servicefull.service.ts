import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from '../components/portfolio';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServicefullService {
  api= environment.api;
  constructor(private http : HttpClient) {}

  //lista
  obtenerLista():Observable <Portfolio[]>{
    return this.http.get<Portfolio[]>(`${this.api}/portafolio`);
  }
  editarPortfolio(id: number, portfolio: Portfolio):Observable <Object>{
    return this.http.put(`${this.api}/portafolio/${id}`, portfolio);
  }
  eliminar(id: number):Observable <Object>{
    return this.http.delete(`${this.api}/portafolio/${id}`);
  }
  //guardar
  guardarPortafolio(portafolio: Portfolio):Observable <Object>{
    return this.http.post(`${this.api}/portafolio`, portafolio);
  }
}
