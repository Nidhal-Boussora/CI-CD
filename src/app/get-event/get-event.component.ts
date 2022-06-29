import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Events } from '../product';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-get-event',
  templateUrl: './get-event.component.html',
  styleUrls: ['./get-event.component.css'],
  
})
export class GetEventComponent implements OnInit {
  private pages:Array<number>;
  
  imagePath="../../assets/images/"
  id;
  name = 'ngx sharebuttons';
numberOfLikes : number=0;
  eventss:Events[];
  totalLength:any;
  searchValue: string;
details : Events;
 page:number=0 ;
 e= new Events;
 startDate = new FormControl(new Date());
 endDate = new FormControl(new Date());

  constructor(private Event:ServiceService,  private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
   this.getEvents();
  }

getEvents(){
  this.Event.getEventss(this.page).subscribe((data)=>{
    this.eventss=data;
    console.log(this.eventss);
  this.totalLength = data.length;

  },err=>{
    console.log('error',err);
    
    });
  
}

likeButtonClick(id,events) {

  console.log("like status before "+events.likes);
  events.likes=events.likes+1; 
  this.Event.update(id,events).subscribe(data =>{
    
  })
   
  console.log("like status after "+events.likes);

}
dislikeButtonClick(id,events) {
  
  console.log("like status before "+events.likes);
  events.likes=events.likes-1; 
  this.Event.update(id,events).subscribe(data =>{
    
  })
  
  console.log("like status after "+events.likes);


}



}


