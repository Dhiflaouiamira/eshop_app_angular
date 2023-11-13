import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input()
  product: Product = new Product();

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

  constructor(private productService: ProductService,
             private activatedRoute: ActivatedRoute,
             private router: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id
    this.productService.findProductById(id).toPromise()
    .then(product => this.product=product)
    .catch(err => console.log)
  }

  update() {

    this.productService.updateProduct(this.product).toPromise()
    .then(data => {
      this.product = data
      alert(`Product: ${data.name} updated`)
      this.router.navigate(['products'])
    })
    .catch(err => alert(err))

  }

}
