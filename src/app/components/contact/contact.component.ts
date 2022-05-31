import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  datos: any ={}
    nombre: "";
    e_mail: "";
    t_ext:"";
  form:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactServ : ContactService
  ) {
    this.buildForm();
  }


  ngOnInit(): void {
  }
  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(80)]],
    });
    this.form.valueChanges
    .pipe(
      debounceTime(700)
    )
    .subscribe(value =>{
      console.log(value);
      });
  }
  submitButton(data: any){
    this.contactServ.enviar(this.form)
      .subscribe((envio)=> this.datos = envio);
  }
  get emailData(){
   return this.form.get('email');
  }
  get nameData(){
    return this.form.get('name');
   }
   get textData() : any{
    return this.form.get('text');
   }



}
