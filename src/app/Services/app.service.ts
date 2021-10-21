import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICart, IProduct } from '../models/model';

const api_products = `${environment.apiUrl}/products`;
const api_cart = `${environment.apiUrl}/cart`;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  public getListOfProducts(): Observable<any> {
    return this.http.get(api_products);
  }

  public updateProductQuantity(product: IProduct): Observable<any> {
    return this.http.put(`${api_products}/${product.id}`, product);
  }

  public getCart(): Observable<any> {
    return this.http.get(api_cart);
  }

  public updateCart(cart: ICart): Observable<any> {
    return this.http.put(api_cart, cart);
  }

  // return [{
  //   product_id: 1,
  //   product_name: 'Laptop',
  //   product_details: 'This is sony vaio laptops',
  //   is_available: true,
  //   purchase_quantity: 2,
  //   quantity: 2,
  //   price: 45000
  // },
  // {
  //   product_id: 2,
  //   product_name: 'TV',
  //   product_details: 'This is sony TV',
  //   is_available: true,
  //   purchase_quantity: 2,
  //   quantity: 10,
  //   price: 60000
  // },
  // {
  //   product_id: 3,
  //   product_name: 'AC',
  //   product_details: 'This is O General AC',
  //   is_available: true,
  //   purchase_quantity: 2,
  //   quantity: 7,
  //   price: 35000
  // },
  // {
  //   product_id: 4,
  //   product_name: 'Freeze',
  //   product_details: 'This is Samsung Freeze',
  //   is_available: true,
  //   purchase_quantity: 1,
  //   quantity: 3,
  //   price: 25000
  // },
  // {
  //   product_id: 5,
  //   product_name: 'Speaker',
  //   product_details: 'This is Boss speaker',
  //   is_available: true,
  //   purchase_quantity: 4,
  //   quantity: 10,
  //   price: 10000
  // }]

}
