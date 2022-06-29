import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DetailsComponent } from './details/details.component';
import { GetEventComponent } from './get-event/get-event.component';
import { HomeComponent } from './home/home.component';
import { UpdateEventComponent } from './update-event/update-event.component';



const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: 'first-component', component: CreateEventComponent},
  {path: 's', component: GetEventComponent},
  {path: 'delete/:id', component: DeleteEventComponent},
  {path: 'update/:id', component: UpdateEventComponent},
  {path: "details/:id", component: DetailsComponent}

  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
