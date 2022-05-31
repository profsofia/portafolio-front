import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthfireService } from './services/authfire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfoliofullstack';
  routes: Routes[] = [];
  items: MenuItem[] = [];

  constructor(private authMyServ: AuthfireService) {}
  userLogged = this.authMyServ.getCurrentUser();

  ngOnInit() {
    this.getCurrentUser();
    this.items = [
      {
        label: 'Linkedin',
        icon: 'pi pi-fw pi-linkedin',
        url: 'https://www.linkedin.com/in/sofiaschenone/',
      },
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
      {
        label: 'Practices',
        icon: 'pi pi-fw pi-code',
        routerLink: ['/practices'],
      },
      { label: 'About', icon: 'pi pi-fw pi-user-plus', routerLink: ['/about'] },
      //{ label: 'Contact', icon: 'pi pi-fw pi-send', routerLink: ['/contact'] },
      //{ label: 'Loggin', icon: 'pi pi-sign-in', routerLink: ['/login'] },
      //{label: 'Lista', icon: 'pi pi-mas', routerLink: ['/crud'] },
      //{label: 'Edit', icon: 'pi pi-user-edit', routerLink: ['/edit'] }
    ];
  }
  getCurrentUser() {
    this.authMyServ.getCurrentUser().subscribe((res) => {
      console.log(res?.email);
    });
  }
  logout() {
    this.authMyServ.onLogout();
  }
}
