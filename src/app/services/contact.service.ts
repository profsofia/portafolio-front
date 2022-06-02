import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  api=environment.api;
  constructor(private http : HttpClient) {}

  enviar(consulta: any): Observable<any>{
   return this.http.post<any>(`${this.api}/contacto`,consulta)
  }
}
