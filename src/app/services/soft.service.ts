import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SoftService {
  apisoftskills=environment.api;
  constructor(private http : HttpClient) {}

  //lista
  obtenerSoftSkills():Observable <any[]>{
    return this.http.get<any[]>(`${this.apisoftskills}/softskills`);
  }
}
