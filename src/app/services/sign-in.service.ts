import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  authLink="http://192.168.21.234:3000/api/v1"
  constructor(private http:HttpClient) { 
  }
  signIn(data):Observable<any>{
    return this.http.post<any>(`${this.authLink}/auth/login`, data)
  }
  
  signUp(data):Observable<any>{
    return this.http.post<any>(`${this.authLink}/auth/signup`,data);
  }
}
