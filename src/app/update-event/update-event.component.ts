import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '../product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  image:any;
  imagePath="../../assets/images/"

id:number;
evv =  new Events();
  constructor(private service :ServiceService , private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

this.route.params.subscribe(data =>{
  this.id = data.id;

  this.service.viewEvent(this.id).subscribe(eventData => {
    
    this.evv = eventData;

  });
});
  }
  updateEvent(form){
    const updateEvent = {
      id: form.value.id,
      lieu: form.value.lieu,
      nbrequipe: form.value.nbrequipe,
      nbrparticipants: form.value.nbrparticipants,
      datedebut: form.value.datedebut,
      datefin: form.value.datefin,
      datelimite: form.value.datelimite,
      categories: form.value.categories,
      like:form.value.like,
image:form.value.image


    };

this.service.update(this.id, form.value).subscribe(data =>{
  form.value.image=this.image;

  console.log(form);
});
this.router.navigate(['s'])

  }
  cancel(): void {
    this.router.navigate(['s']);
  }
  selectFile(event) {
    let loadedImage = event.currentTarget;
    this.image = event.target.files[0].name;
  }

}
