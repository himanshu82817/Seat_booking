import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  authLink="http://localhost:3000/api/v1"
  constructor(private http:HttpClient) { 
  }
  signIn(data):Observable<any>{
    return this.http.post<any>(`${this.authLink}/auth/login`, data)
  }

}
