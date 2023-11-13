import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { Ng2SearchPipe } from 'ng2-search-filter'; // Import the Ng2SearchPipe

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  searchTerm: string = '';

  formvalue!: FormGroup;
  @Input() productobj: Product = new Product();
  products: Product[] = []; 
  
  selectedImage: File | undefined;
  newProduct:Product = new Product();
  searchText=""
  productTypes: string[] = [
    "maquillage",
    "ongles",
    "Soins de la peau",
    "Parfums",
    "Produits capillaires",
    "Soins du corps",
    "Produits d'hygiène féminine",
    // Add more product types as needed
  ];
  selectedType = "";

  productCondition: string[]=[
    "New products",
    "Best sales",
    "Prices drop",
    "In Stock",
    "En promo"
  ]

  filteredProducts: Product[] = [];

  storage=localStorage;
 
  constructor(private productService: ProductService , private router :Router) {}

  ngOnInit() {
    this.getAllProducts()
  }

  reload(e: any) {
    this.getAllProducts()
  }
 
  postProductDetails() {
    delete this.newProduct._id;
    delete this.newProduct.createdAt;
    delete this.newProduct['__v'];

    this.productService.addProduct(this.newProduct).subscribe(
      (res) => {
        console.log(res);
        alert('Product added successfully');

        // After adding the product, fetch the updated list of products again
        this.getAllProducts();
      },
      (err) => {
        console.error(err);
        if (err.status === 409) {
          // 409 indicates a duplicate key error (product already exists)
          alert('Product already exists.');
        } else {
          console.log(err)
          alert('Something went wrong. Please check the console for more details.');
        }
      }
    );
  }
 
   searchProducts(e: any) { 
    if (this.searchTerm.trim() == '') {
      // If the search term is empty, show all the products
      this.getAllProducts(); // Assign the products to this.products
    } else {
      // Otherwise, perform a search on the products based on the search term
     this.productService.searchProducts(this.searchTerm).toPromise()
     .then(data => this.products = data)
     .catch(err => console.log)
    }
  }
  
  getAllProducts() {
    this.productService.findAll().toPromise()
    .then(res => this.products = res)
    .catch(err => console.log)
  }

  select(type: string) {
    this.selectedType = type
    this.productService.filterbytype(type).toPromise()
    .then(res => this.products = res)
    .catch(err => console.log)
  }
}
