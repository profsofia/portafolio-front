import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthfireService {
  public user: User | undefined;
  constructor(
    public afireAuth : AngularFireAuth,
    private route: Router
  ) { }

  async onLogin(email: string, password:string): Promise<any>{
    try {
   await this.afireAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async onLogout(){
    try {
      await this.afireAuth.signOut();
      this.route.navigate(['/']);
    } catch (error) {
      console.log(error);
    }


  }
  getCurrentUser(){
   return this.afireAuth.authState;
  }
}
