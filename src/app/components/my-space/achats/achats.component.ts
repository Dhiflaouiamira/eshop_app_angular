import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.scss']
})
export class AchatsComponent implements OnInit {
  cart: Product[] = [];
  total = 0;
  orders: Order[] = []
  clientPhoneNumber: string | null = null; // Initialize the variable to store the client's phone number
  appStorage = localStorage;
  constructor(private productService: ProductService,
    private ordersService: OrderService) { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem("products") || "[]");
    let client = localStorage.getItem("id") || "";
    this.ordersService.getOrdersByClientId(client).toPromise()
    .then(data => this.orders = data)
    .catch(err => console.log)

  }

  deletefromCart(productedobj: Product) {
    let products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id == productedobj._id) {
        products.splice(i, 1);
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
  }

  handleValidatedCommand() {
    const message = "Your order has been successfully validated. The delivery person will contact you on your phone number.";
    alert(message);
  }
}
