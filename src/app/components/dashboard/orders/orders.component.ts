import { OrderService } from 'src/app/services/order/order.service';
import { Order } from '../../../models/order';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

updateorderDetails() {
throw new Error('Method not implemented.');
}

 
  formvalue!: FormGroup;
  constructor(private orderService: OrderService) { }
  orders: Order[] = [];
  newOrder: Order = new Order();
  selectedorder:Order= new Order();
  showStatus = false;

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.findAll().toPromise()
      .then(oo => this.orders = oo)
      .catch(err => console.log)
   
  }
  fetchOrders() {
    this.orderService.findAll().subscribe(
      (orders) => {
        this.orders = orders;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  addOrder(order: Order): void {
    this.orderService.addOrder(order).subscribe(
      (newOrder: Order) => {
        this.orders.push(newOrder);
      },
      (error: any) => {
        console.error('Error adding order:', error);
      }
    );
  }

  updateOrder(order: Order): void {
    this.orderService.updateOrder(order).subscribe(
      (updatedOrder: Order) => {
        // Handle the updated order if necessary
      },
      (error: any) => {
        console.error('Error updating order:', error);
      }
    );
  }
  getAllOrders(): void {
    this.orderService.findAll().toPromise()
    .then(oo => this.orders = oo)
    .catch(err => console.log)
  }

  deleteOrder(orderId: string) {

    if (confirm('Are you sure you want to delete this order?')) {
    this.orderService.deleteOrder(orderId).subscribe(
       
      (res) => {
        console.log(res);
        alert('order deleted successfully');

        // After deleting the order, fetch the updated list of orders again
        this.getAllOrders();
      },
      (err) => {
        console.error(err);
        alert('Something went wrong. Please check the console for more details.');
      }
    );
  }







}}