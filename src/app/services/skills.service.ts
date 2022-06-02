import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  apiSkill=environment.api;
  constructor(private http : HttpClient) {}

  //lista
  obtenerSkills():Observable <any[]>{
    return this.http.get<any[]>(`${this.apiSkill}/skills`);
  }
  editarSkill(id: number, portfolio: any):Observable <Object>{
    return this.http.put(`${this.apiSkill}/skills/${id}`, portfolio);
  }
  eliminarSkill(id: number):Observable <Object>{
    return this.http.delete(`${this.apiSkill}/skills/${id}`);
  }
  //guardar
  guardarSkill(portafolio: any):Observable <Object>{
    return this.http.post(`${this.apiSkill}/skills`, portafolio);
  }
}
