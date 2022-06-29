import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from '../product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  imagePath="../../assets/images/"

  eventss:Events;
  id: any;
  constructor(private Event:ServiceService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getEventss(this.id);

  }
  getEventss(id){
    this.Event.viewEvent(id).subscribe((data)=>{
     // console.log(data['hydra:member'])
      this.eventss=data;
      console.log(this.eventss);
  
    },err=>{
      console.log('error',err);
      
      });
    
  }
}
