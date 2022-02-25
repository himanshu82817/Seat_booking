import { HttpClient, } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  authLink="http://192.168.21.234:3000/api/v1"
  constructor(private htttp:HttpClient) { }
  bookseat(data):Observable<any>{
    let token=localStorage.getItem("token");
    
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json'); 

    return this.htttp.put<any>(`${this.authLink}/seat-form/update-form`, data,{headers:headers})
  }
  cancelSeat(id):Observable<any>{
    let token=localStorage.getItem("token");
    
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json'); 
    return this.htttp.delete<any>(`${this.authLink}/seat-form/cancel-seat`,{headers:headers,body:{id:id}})
  }
  bookMeeting(data):Observable<any>{
    let token=localStorage.getItem("token");
    
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json'); 


    return this.htttp.post<any>(`${this.authLink}/conference`, data,{headers:headers})
  }
  cancelMeeting(id):Observable<any>{
      return this.htttp.delete<any>(`${this.authLink}/conference/conference-hall`,{body:{id:id}})
  }

  getSeatInfo(exno):Observable<any>{
    return this.htttp.post<any>(`${this.authLink}/seat-form/table-booking`,exno)
  }
}
