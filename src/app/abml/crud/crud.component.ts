import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/components/portfolio';
import { ServicefullService } from 'src/app/services/servicefull.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
 portafolios: Portfolio[];
 portafolioback: any={
   imagenBanner: "",
   imagenPerfil: "",
   nombre:"",
   descripcion:""
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
      imagenBanner: "",
      imagenPerfil: "",
      nombre:"",
      descripcion:""
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
