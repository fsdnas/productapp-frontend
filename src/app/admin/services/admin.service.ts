import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private _baseUrl = 'http://localhost:8081/product-api/products';
  constructor(private _http: HttpClient) {}

  addProduct = (product: Product): Observable<Product> => {
    return this._http.post<Product>(this._baseUrl, product);
  };
}
