import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { TypeView } from '../models/type-view';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _baseurl: string = 'http://localhost:8081/product-api/products';

  constructor(private http: HttpClient) {}

  // getAllProducts = (): Observable<Product[]> => {
  //   return this.http.get<Product[]>(this._baseurl);
  // };

  // getById = (productId: number): Observable<Product> => {
  //   //http://localhost:8081/product-api/products/id
  //   let url = this._baseurl + '/id/' + productId;
  //   return this.http.get<Product>(url);
  // };

  // getByCategory = (category: string): Observable<Product[]> => {
  //   let url = `${this._baseurl}/category/${category}`;
  //   return this.http.get<Product[]>(url);
  // };
  // getByType = (type: string): Observable<Product[]> => {
  //   let url = `${this._baseurl}/type/${type}`;
  //   return this.http.get<Product[]>(url);
  // };
  // getTypeByCategory = (category: string): Observable<TypeView[]> => {
  //   let url = `${this._baseurl}/categorytype/${category}`;
  //   return this.http.get<TypeView[]>(url);
  // };

  getAllProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(this._baseurl);
  };

  getById = (productId: number): Observable<Product> => {
    let url = this._baseurl + '/id/' + productId;
    return this.http.get<Product>(url);
  };

  getTypeByCategory = (category: string): Observable<TypeView[]> => {
    let url = `${this._baseurl}/categorytype/${category}`;
    return this.http.get<TypeView[]>(url);
  };
  getByCategory = (category: string): Observable<Product[]> => {
    let url = `${this._baseurl}/category/${category}`;
    return this.http.get<Product[]>(url);
  };
  getByType = (type: string): Observable<Product[]> => {
    let url = `${this._baseurl}/type/${type}`;
    return this.http.get<Product[]>(url);
  };

  getDistinctCategory = (): Observable<string[]> => {
    let url = `${this._baseurl}/category/distinct`;
    return this.http.get<string[]>(url);
  };
}
