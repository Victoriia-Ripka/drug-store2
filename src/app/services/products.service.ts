// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PRODUCTS } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private dataUrl = 'app/data/products.json';
  // constructor(private http: HttpClient) { }
  //  
  // getData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.dataUrl);
  // }
  products = PRODUCTS

  getData(): any {
    return this.products;
  }

  // getProduct(id: number): Observable<any> {
  //   return this.http.get<any[]>(this.dataUrl).pipe(
  //     map(products => products.filter(product => product.id == id))
  //   );
  // }
}
