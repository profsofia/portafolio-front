import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfoliofullstack';
  routes: Routes[] =[];
  items: MenuItem[] =[];

    ngOnInit() {
        this.items = [
            {label: 'Linkedin', icon: 'pi pi-fw pi-linkedin', url:'https://www.linkedin.com/in/sofiaschenone/'},
            {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            {label: 'Practices', icon: 'pi pi-fw pi-code' , routerLink: ['/practices']},
            {label: 'About', icon: 'pi pi-fw pi-user-plus', routerLink: ['/about']},
            {label: 'Contact', icon: 'pi pi-fw pi-send', routerLink: ['/contact']},
            {label: 'Loggin', icon: 'pi pi-sign-in', routerLink: ['/login']}
        ];
    }
}
