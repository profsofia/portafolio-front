import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from '../components/portfolio';

@Injectable({
  providedIn: 'root'
})
export class ServicefullService {
  api="http://localhost:8080/api/portafolio";
  constructor(private http : HttpClient) {}

  //lista
  obtenerLista():Observable <Portfolio[]>{
    return this.http.get<Portfolio[]>(`${this.api}`);
  }
  editarPortfolio(id: number, portfolio: Portfolio):Observable <Object>{
    return this.http.put(`${this.api}/${id}`, portfolio);
  }
  eliminar(id: number):Observable <Object>{
    return this.http.delete(`${this.api}/${id}`);
  }
  //guardar
  guardarPortafolio(portafolio: Portfolio):Observable <Object>{
    return this.http.post(`${this.api}`, portafolio);
  }
}
