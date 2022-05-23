import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthfireService } from 'src/app/services/authfire.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    email: new FormControl('',Validators.email),
    password: new FormControl('',Validators.required)
  })

  constructor(private myAuthFire: AuthfireService,
    private rutes : Router
    ) { }

  ngOnInit(): void {
  }
  onLogin(){
    const {email, password }= this.formLogin.value;
    this.myAuthFire.onLogin(email, password);
    //console.log('Form= ', this.formLogin.value);
    this.formLogin.reset();
  }
 get Email(){
    return this.formLogin.get('email');
  }
  redirectTo(){
  console.log('funcionando')
  this.rutes.navigate(['pagecrud']);
  }


}
