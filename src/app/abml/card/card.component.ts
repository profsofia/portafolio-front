import { Component, OnInit } from '@angular/core';
import { ServicefullService } from 'src/app/services/servicefull.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  portafolioImg: any[] ;


  constructor(
    private servicioFull: ServicefullService
  ) { }

  ngOnInit(){
    this.servicioFull.obtenerLista()
    .subscribe(respuesta=>{
      this.portafolioImg = respuesta;
    })
  }

}
