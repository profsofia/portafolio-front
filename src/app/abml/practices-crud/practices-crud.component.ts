import { Component, OnInit } from '@angular/core';
import { Practices } from 'src/app/components/practices';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-practices-crud',
  templateUrl: './practices-crud.component.html',
  styleUrls: ['./practices-crud.component.css']
})
export class PracticesCrudComponent implements OnInit {
  practices: Practices[];
  practicesSave: any={
    practicaNombre: "",
    tecnologia: "",
    imagenPractica: "",
    url: ""
  }
   constructor(
     private servicioPractice: ProyectsService
   ) { }

   ngOnInit(): void {
     this.getAllPractices();
   }
   getAllPractices(){
     this.servicioPractice.obtenerProyect()
     .subscribe((data: any)=>{
      this.practices = data;
     })
   }

   savePractice(){
     if(this.practicesSave.id_practices){
       this.servicioPractice.editarProyect(this.practicesSave.id_practices, this.practicesSave)
       .subscribe(()=> this.getAllPractices());
     }else{
       this.servicioPractice.guardarProyect(this.practicesSave)
       .subscribe(()=> this.getAllPractices());
     }
     this.practicesSave={
      practicaNombre: "",
      tecnologia: "",
      imagenPractica: "",
      url: ""
     }
   }
   editPractice(datos: any){
     this.practicesSave= {
       ...datos
     }
   }

   deletePractice(datos: any){
     this.servicioPractice.eliminarProyect(datos.id_practices).subscribe(()=>{
       this.getAllPractices();
     })
   }
}
