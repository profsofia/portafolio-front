import { Component, OnInit } from '@angular/core';
import { ServicefullService } from 'src/app/services/servicefull.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
 portafolios: any[];
 portafolioback: any={
   imagen: "",
   nombre: "",
   titulo:"",
   skills:"",
   proyectos:""
 }
  constructor(
    private servicioApi: ServicefullService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.servicioApi.obtenerLista()
    .subscribe((data: any)=>{
     this.portafolios = data;
    })
  }

  save(){
    if(this.portafolioback.id){
      this.servicioApi.editarPortfolio(this.portafolioback.id, this.portafolioback)
      .subscribe(()=> this.getAll());
    }else{
      this.servicioApi.guardarPortafolio(this.portafolioback)
      .subscribe(()=> this.getAll());
    }
    this.portafolioback={
      imagen: "",
      nombre: "",
      titulo:"",
      skills:"",
      proyectos:""
    }
  }
  edit(datos: any){
    this.portafolioback= {
      ...datos
    }
  }

  deleteDato(datos: any){
    this.servicioApi.eliminar(datos.id).subscribe(()=>{
      this.getAll();
    })
  }
}
