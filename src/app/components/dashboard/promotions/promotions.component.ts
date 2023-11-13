import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  }

  search() {
    this.productService.findAll().toPromise()
    .then(res => this.products = res)
    .catch(err => console.log)
  }

}
