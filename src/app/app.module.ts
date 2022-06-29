import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetEventComponent } from './get-event/get-event.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { UpdateEventComponent } from './update-event/update-event.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import { EndDateValidatorDirective } from './EndDateValue';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { DetailsComponent } from './details/details.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
@NgModule({
  
  declarations: [
    AppComponent,
    GetEventComponent,
    CreateEventComponent,
    DeleteEventComponent,
    HomeComponent,
    
    SearchfilterPipe,
    
    UpdateEventComponent,
    EndDateValidatorDirective,
    DetailsComponent,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
             
    ShareIconsModule
    
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
