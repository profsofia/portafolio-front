import { Component, OnInit } from '@angular/core';
import { ServicefullService } from 'src/app/services/servicefull.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  textoAbout: any;

  constructor(private servciceDescrip : ServicefullService) { }

  ngOnInit(): void {
    this.servciceDescrip.obtenerLista()
    .subscribe(descripcion=>this.textoAbout = descripcion)
  }

}
