import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Events } from '../product';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  
  private url:string ="http://localhost:8000/api/events";
da = new Events;
debut = this.da.datedebut;
fin = this.da.datefin;
errorMessage: string = '';
save:boolean;
image:any;
  form: FormGroup
  succesMessage: string = '';

  ListEvents:any=[];
  
  private _getHeaders():HttpHeaders{
    let header = new HttpHeaders({
      'Content-Type':'application/json'
    });
return header;
  }
  constructor(private fb: FormBuilder, private Event:ServiceService,  private route: ActivatedRoute,private router: Router
    ) {//this.createForm();
    }

  ngOnInit(): void {
    this.errorMessage =""
    this.save=true;
  }

Submit(f:Events){

//image
  f.image=this.image;
//
  console.log(f.image);
  this.Event.postEventss(f).subscribe(data => {
    console.log(f);
  });

  this.router.navigate(['s'])

}
cancel(): void {
  this.router.navigate(['s']);
}
/*
createForm(){
  this.form = this.fb.group({
    datedebut:['', Validators.required],
    datefin: ['', Validators.required]
  }, {validator: this.dateLessThan('datedebut', 'datefin')})
}
dateLessThan(from: string, to: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let f = group.controls[from];
    let t = group.controls[to];
    if (f.value > t.value) {
      return {
        dates: "Date from should be less than Date to"
      };
    }
    return {};
  }
}*/
//image
selectFile(event) {
  let loadedImage = event.currentTarget;
  this.image = event.target.files[0].name;
}
//
onSubmit() {
  console.log("Probando")
  console.log(this.form)
  console.log(this.form.value)
}
//controle saisie date
comparisonStartdateValidator(datedeb,datef){
  console.log(datedeb.value);
  console.log(datef.value);
  if(datef.value<datedeb.value){
    this.errorMessage="date fin est inferieur au date debut !!"
    this.save=false;
  }
  else{
    this.errorMessage=null;

    this.save=true;
  }
}
//

nomreq(n){
  console.log(n.value);

if(n.value =="")
{
  this.errorMessage="merci de remplir le nom"
  this.save=false;

}
else{
  this.save=true;
this.succesMessage="good";
}
}

}


