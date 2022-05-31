import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ProyectsService } from 'src/app/services/proyects.service';
import { ServicefullService } from 'src/app/services/servicefull.service';
import { SkillsService } from 'src/app/services/skills.service';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-pageedit',
  templateUrl: './pageedit.component.html',
  styleUrls: ['./pageedit.component.css']
})
export class PageeditComponent implements OnInit {
  cabecera: Portfolio[];

  cabeceraSave: any={
  imagenBanner: "",
  imagenPerfil: "",
  nombre:"",
  descripcion: ""
}
   spinnerValue: number = 0;
  constructor(
    private servFullImg : ServicefullService,
    private servPractices : ProyectsService,
    private servSkills : SkillsService,
    public dialogService: DialogService
    ) { }

  ngOnInit() {
    this.getAllHeder();
    let interval = setInterval(() => {
        this.spinnerValue = this.spinnerValue + Math.floor(Math.random() * 10) + 1;
        if (this.spinnerValue >= 70) {
            this.spinnerValue = 70;
            clearInterval(interval);
        }
    }, 500);
}
getAllHeder(){
  this.servFullImg.obtenerLista()
  .subscribe(datos=>{
    this.cabecera = datos;
  })
}
saveHeader(){
  if(this.cabeceraSave.id){
    this.servFullImg.editarPortfolio(this.cabeceraSave.id, this.cabeceraSave)
    .subscribe(()=> this.getAllHeder());
  }else{
    this.servFullImg.guardarPortafolio(this.cabeceraSave)
    .subscribe(()=> this.getAllHeder());
  }
  this.cabeceraSave={
    imagenBanner: "",
  imagenPerfil: "",
  nombre:"",
  descripcion: ""
  }
}
editHeader(datos:any){
  this.cabeceraSave={
    ...datos
  }
}


}
