import { Injectable } from '@angular/core';
import { ApiResponseResgisterDto, RegisterRequestDto , LoginRequest, ApiResponselogin} from '../Core/Models/auth.model';
import { Observable, pipe, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environment/environment.dev'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private appURL = environment.apiUrl; 

  register(url : string , body : FormData) : Observable<ApiResponseResgisterDto>{
    return this.http.post<ApiResponseResgisterDto>( this.appURL + url , body).pipe(
      tap(response => {
               
      })
    );
  }

   login(url : string , body : LoginRequest) : Observable<ApiResponselogin> {
      return this.http.post<ApiResponselogin>(this.appURL+ url , body).pipe(
      
      );
   }







  


}
