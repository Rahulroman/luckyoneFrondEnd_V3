import { Injectable } from '@angular/core';
import { ApiResponseResgisterDto, RegisterRequestDto } from '../Core/Models/auth.model';
import { Observable, pipe, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }


  register(url : string , body : RegisterRequestDto) : Observable<ApiResponseResgisterDto>{
    return this.http.post<ApiResponseResgisterDto>("http://localhost:5020/api/Auth/" + url , body).pipe(
      tap(response => {
               
      })
    );

  }

  


}
