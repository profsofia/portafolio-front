import { Component, OnInit, ViewChild } from '@angular/core';
import { Skills } from 'src/app/components/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import { SoftService } from 'src/app/services/soft.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  softSkills: any[];
  habilidades: any[];



    //selectedSkills: Skills[];
    constructor(private skillsService: SkillsService, private softServ: SoftService) {}

    ngOnInit() {
        this.getAllSkills();
        this.getAllSoftSkills();
    }
    getAllSkills(){
      this.skillsService.obtenerSkills()
      .subscribe((data: any)=>{
       this.habilidades = data;
      })
    }
    getAllSoftSkills(){
      this.softServ.obtenerSoftSkills()
      .subscribe(datos=> this.softSkills = datos)
    }

   drop($event: CdkDragDrop<string[]>){
     //estamos moviendo en el mismo contenedor//
     if($event.previousContainer === $event.container){
       moveItemInArray(
         $event.container.data,
         $event.previousIndex,
         $event.currentIndex
       )
     }else{
       //para movernos al otro contenedor
       transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
       )
     }
   }


}
