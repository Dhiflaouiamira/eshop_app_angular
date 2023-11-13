import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {

  cart: Product[] = [];
  total = 0;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
   this.cart=JSON.parse(localStorage.getItem ("products") || "[]")
   console.log(this.cart)

  }

  deletefromCart(productedobj :Product) {
    let products:Product[]=JSON.parse(localStorage.getItem ("products") || "[]")
    for (let i = 0; i < products.length; i++) {
      if(products[i]._id==productedobj._id){
        products= products.splice(i, 1)
      }

     
    }

    localStorage.setItem("products",JSON.stringify(products))
  }


  purchase(){
    if(localStorage.getItem('token')==null) {
      // navigate login
      this.router.navigate(['/login'])
    }
    else {
      this.router.navigate(['/myspace'])
    }
  }

}
