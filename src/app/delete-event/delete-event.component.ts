import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  id;

  constructor( 
    private router: Router, 

    private pservice : ServiceService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pservice.delete(this.id).subscribe(
      () => {alert('deleted'); 
      this.router.navigate(['s']);

    }
      
    );
  }


 
}
