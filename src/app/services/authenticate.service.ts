import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/LoginModel';
import { RegisterModel } from '../models/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:44343/api";

  formData = new LoginModel();
  formData2 = new RegisterModel();

  getJWTToken(): Observable<any> {
    return this.http.post<any>(this.APIUrl + "/authenticate/login",this.formData);
  }
  ifLoggedIn():boolean{
    if(localStorage.getItem('token')=='0'){
      return false;
    }
    else{
      return true;
    }
  }
  register(){
    return this.http.post<any>(this.APIUrl + "/authenticate/register",this.formData2);
  }
  ifSellerOrBoth():boolean{
    if(localStorage.getItem('role')=='seller'||localStorage.getItem('role')=='both'||localStorage.getItem('role')=='admin'){
      return true;
    }
    else{
      return false;
    }
  }
  
}
