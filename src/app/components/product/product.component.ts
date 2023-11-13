import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = []; // Store the list of products fetched from the server
  newProduct: Product = new Product();
  storage = localStorage;
  isEditMode: boolean = false; // Property to track whether the modal is in Add or Update mode
  @Input() productobj: Product = new Product();
  @Output() productsEmiter: EventEmitter<Product[]> = new EventEmitter();
  selectedProduct: Product | null = null;
  formvalue!: FormGroup;
  selectedProductIndex: number | null = null;
  product =new Product();

  // Define an array to hold all available product types
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

  constructor(private productService: ProductService, private router: Router, private formBuilder: FormBuilder) {

    




  }



  ngOnInit(): void {
    this.formvalue = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      type: ['', Validators.required],
      promo: [''],
      conditions: ['', Validators.required],
      star: [''],
      exampleCheck1: [false],
    });
  }

  fetchproducts() {
    this.productService.findAll().toPromise()
      .then(ps => this.products = ps)
      .catch(err => console.log(err));
  }

  AddToCard(newProduct: Product) {
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    this.ngOnInit();
  }

  editProduct(product: Product) {
    // Populate the form group with the product data
    this.formvalue.patchValue({
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type,
      promo: product.promo,
      conditions: product.conditions,
      star: product.star,
      exampleCheck1: product.exampleCheck1,
    });

    // Keep track of the selected product and its index
    this.selectedProduct = product;
    this.selectedProductIndex = this.products.indexOf(product);
  }

  updateProductDetails() {
    if (this.selectedProduct) {
      // Update the selected product with form data
      this.selectedProduct.name = this.formvalue.value.name;
      this.selectedProduct.type = this.formvalue.value.type;
      this.selectedProduct.conditions = this.formvalue.value.conditions;
      this.selectedProduct.price = this.formvalue.value.price;
      this.selectedProduct.promo = this.formvalue.value.promo;
      this.selectedProduct.image = this.formvalue.value.image;
      this.selectedProduct.stars = this.formvalue.value.stars;

      // Make the PUT request to update the product
      this.productService.updateProduct(this.selectedProduct).subscribe(
        (updatedProduct) => {
          console.log(updatedProduct);
          alert('Product updated successfully');

          // After updating the product, fetch the updated list of products again
          this.fetchproducts();
        },
        (err) => {
          console.error(err);
          alert('Something went wrong. Please check the console for more details.');
        }
      );
    }
  }

  deleteProduct(productId: string) {
    if (!productId) {
      console.error('Product ID is undefined.'); // Add some error handling or log the error.
      return;
    }

    // Call the ProductService to delete the product on the server
    this.productService.deleteProduct(productId).subscribe(
      (abc) => {
        // Remove the deleted product from the products array
        this.products = this.products.filter(p => p._id !== productId);
        console.log(this.products)
        this.productsEmiter.emit(this.products);
        // Redirect/navigate to  
        this.router.navigate(['/products']);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  createListFrom1ToN(n: number) {
    const list = [];
    for (let i = 1; i <= n; i++) {
      list.push(i);
    }
    return list;
  }
}
