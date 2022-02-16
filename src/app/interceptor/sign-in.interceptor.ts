import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SignInInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    if(token){
      request = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      })
      console.log('token Set')
    }
    return next.handle(request);
  }
}

export const authProviders = [
  {provide: HTTP_INTERCEPTORS, useClass:SignInInterceptor,multi:true}
]
