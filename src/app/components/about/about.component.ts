import { Component, OnInit } from '@angular/core';
import { ServicefullService } from 'src/app/services/servicefull.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'white',
        color: 'black'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'black',
        color: 'white'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AboutComponent implements OnInit {
  isOpen: boolean = true;
  textoAbout: any;

  constructor(private servciceDescrip : ServicefullService) { }

  ngOnInit(): void {
    this.servciceDescrip.obtenerLista()
    .subscribe(descripcion=>this.textoAbout = descripcion)
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
