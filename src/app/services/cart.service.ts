import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:44343/api";
  
  getCartList(){
    return this.http.get<any[]>(this.APIUrl + "/cart/"+localStorage.getItem('username'));
  }

  addToCart(bookid:number,quantity:number){
    console.log()
    return this.http.post<any[]>(this.APIUrl + "/cart/"+localStorage.getItem('username')+"/"+bookid,quantity);
  }

  deleteCartEntry(cartid:number){
    return this.http.delete<any[]>(this.APIUrl + "/cart/"+localStorage.getItem('username')+"/"+cartid);
  }

  
}
