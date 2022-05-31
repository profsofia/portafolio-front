import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  api="http://localhost:8080/api/contacto";
  constructor(private http : HttpClient) {}

  enviar(consulta: any): Observable<any>{
   return this.http.post<any>(`${this.api}`,consulta)
  }
}
