import { Injectable } from '@angular/core';
import { Iuser } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'https://api.escuelajs.co/api/v1'
  constructor(private http : HttpClient) { }

  //register
  register(user : Iuser) : Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/auth/register`,user)
  }

  //login
  login(user : any) : Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/auth/login`,user)
  }

  //logout
  logout(){
    localStorage.clear();
  }

  getToken() : boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
   }
}
