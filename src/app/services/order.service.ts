import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:44343/api";
  
  getOrderList(){
    return this.http.get<any[]>(this.APIUrl + "/Orders/"+localStorage.getItem('username'));
  }

  Order(bookid:number,quantity:number){
    return this.http.post<any[]>(this.APIUrl + "/Orders/"+localStorage.getItem('username')+"/"+bookid+"/ordered",quantity);
  }
  cancelOrder(orderid:number){
    return this.http.put<any[]>(this.APIUrl + "/Orders/Cancel/"+localStorage.getItem('username'),orderid);
  }
}

