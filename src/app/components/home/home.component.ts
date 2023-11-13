import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from '../../models/blog';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  blogs: Blog[] = [];

  constructor(private productService: ProductService,
              private blogService: BlogService) { }

  ngOnInit(): void {
    this.productService.findAll().toPromise()
    .then(res => this.products = res)
    .catch(err => console.log)
    this.blogs = this.blogService.BLOGS;
  }

}
