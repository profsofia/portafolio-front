import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftService {
  apiSkill="http://localhost:8080/api/softskills";
  constructor(private http : HttpClient) {}

  //lista
  obtenerSoftSkills():Observable <any[]>{
    return this.http.get<any[]>(`${this.apiSkill}`);
  }
}
