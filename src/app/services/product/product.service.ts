import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = []

  endpoint = environment.API_URL + '/products';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.endpoint, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.endpoint}/${product._id}`, product);
  }

  findProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}/${id}`);
  }
  
  getAllProducts(): Product[] {
    return this.products;
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${this.endpoint}/${productId}`);
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}?search=${searchTerm}`)
  }

  filterbytype(type: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}?type=${type}`);
  }
  
}
