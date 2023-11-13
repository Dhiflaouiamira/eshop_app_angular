import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private endpoint = environment.API_URL + '/orders'; // Correct the endpoint URL to '/orders'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.endpoint);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.endpoint, order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.endpoint}/${order._id}`, order);
  }

  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete(`${this.endpoint}/${orderId}`);
  }

  // Remove this method as it is a duplicate
  // getOrders(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/orders`);
  // }

  getOrdersByClientId(clientId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.endpoint}?client=${clientId}`); // Correct the endpoint URL to '/clients'
  }
  getOrders(): Observable<any[]> { // Add back the getOrders method
    return this.http.get<any[]>(this.endpoint);
  }
}
