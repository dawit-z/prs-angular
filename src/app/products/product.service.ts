import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = "http://localhost:27091/api/products/";

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}${id}`)
  }
}
