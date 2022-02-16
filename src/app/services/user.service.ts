import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authLink="http://localhost:3000/api/v1"
  constructor(private htttp:HttpClient) { }
  getData(data):Observable<any>{
    // console.log("data",data);
    return this.htttp.post<any>(`${this.authLink}/seat-form/find-seats`, data)
  }
  userDetails():Observable<any>{
    let token=localStorage.getItem("token");
    
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json');
    return this.htttp.get<any>(`${this.authLink}/users/seatcheck`,{headers:headers})  
  }
  

}
