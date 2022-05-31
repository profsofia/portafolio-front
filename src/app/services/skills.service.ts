import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  apiSkill="http://localhost:8080/api/skills";
  constructor(private http : HttpClient) {}

  //lista
  obtenerSkills():Observable <any[]>{
    return this.http.get<any[]>(`${this.apiSkill}`);
  }
  editarSkill(id: number, portfolio: any):Observable <Object>{
    return this.http.put(`${this.apiSkill}/${id}`, portfolio);
  }
  eliminarSkill(id: number):Observable <Object>{
    return this.http.delete(`${this.apiSkill}/${id}`);
  }
  //guardar
  guardarSkill(portafolio: any):Observable <Object>{
    return this.http.post(`${this.apiSkill}`, portafolio);
  }
}
