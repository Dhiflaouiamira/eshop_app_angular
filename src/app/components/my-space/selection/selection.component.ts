import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  cart: Product[] = [];
  total = 0;
  clientPhoneNumber: string | null = null; // Initialize the variable to store the client's phone number
 order = new Order();
  constructor(private productService: ProductService ,
            private orderservice :OrderService) { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem("products") || "[]");
    console.log(this.cart);
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
    console.log(this.cart)
    this.order.client._id=localStorage.getItem("id") || ""
    this.order.products=this.cart
    this.cart.forEach(p => this.total=this.total+p.price)
    this.order.total = this.total
    // call order service
    this.orderservice.addOrder(this.order).toPromise()
    .then(o => {
      alert("Order submitted")
      this.cart = []
    })
    .catch(err => console.log)
  }
}

