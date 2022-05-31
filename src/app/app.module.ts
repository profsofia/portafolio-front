import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { PracticesComponent } from './components/practices/practices.component';
///////////////////////////FireAuth///////////////////7
import { AuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
/////////PRIME NG//////////////
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule } from 'primeng/toast';
import {ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';

/////////////////////////////////////////////////////
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { CrudComponent } from './abml/crud/crud.component';
import { PageeditComponent } from './components/pageedit/pageedit.component';
import { SkillsComponent } from './abml/skills/skills.component';
import { PracticesCrudComponent } from './abml/practices-crud/practices-crud.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    Page404Component,
    PracticesComponent,
    LoginComponent,
    CrudComponent,
    PageeditComponent,
    SkillsComponent,
    PracticesCrudComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MenubarModule,
    TabMenuModule,
    DragDropModule,
    ProgressBarModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule,
    CardModule,
    TableModule,
    BrowserAnimationsModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig) ,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
