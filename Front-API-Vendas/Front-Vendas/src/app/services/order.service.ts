import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Variables from '../config/variables';
import Order from '../model/order';
import Product from '../model/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

private apiURL : string = Variables.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) { }
  
  private getAuthHeaders() : HttpHeaders{
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`)
  }
  getAllOrder() : Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiURL}/orders`, {headers: this.getAuthHeaders()});
  }
  getOrderById(id :string) : Observable<Order>{
    return this.http.get<Order>(`${this.apiURL}/orders/${id}`, {headers: this.getAuthHeaders()});
  }
  CreateOrder(order: Order) : Observable<Order>{
    return this.http.post<Order>(`${this.apiURL}/orders/`, order, {headers: this.getAuthHeaders()});
  }
}
