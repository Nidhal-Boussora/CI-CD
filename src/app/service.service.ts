import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from './product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private url:string ="http://localhost:8000/api/events";

private _getHeaders():HttpHeaders{
  let header = new HttpHeaders({
    'Content-Type':'application/json'
  });
return header;
}
  constructor(private http:HttpClient) { }
  getEventss(page:number) :Observable<any>{
    return this.http.get(this.url);
  }
  postEventss(event){
   let options= {
     headers: this._getHeaders()
    };
    return this.http.post("http://localhost:8000/api/events", event,options);
  }
  delete(id){
    console.log(this.url+id);
    return this.http.delete<Events>("http://localhost:8000/api/events/" + id);
  }
  update(id,evv:Events){
    let options= {
      headers: this._getHeaders()
     };
    return this.http.put<Events>("http://localhost:8000/api/events/" + id, evv);
  }
  viewEvent(id): Observable<Events>{
    const urlEvent = "http://localhost:8000/api/events/"+ id;
return this.http.get<any>(urlEvent);
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.url}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  
  getFiles(): Observable<any> {
    return this.http.get(`${this.url}/files`);
  }
}
