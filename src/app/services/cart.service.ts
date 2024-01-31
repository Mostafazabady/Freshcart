import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
 
  constructor(private _HttpClient: HttpClient) {}
  cartNumber:BehaviorSubject<number>=new BehaviorSubject(0)
  addProductToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,

      {
        productId: productId,
      }
    );
  }

  getProductFormCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`);
  }

  removeCartProduct(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
    );
  }

  updateCart(id:string, countItem:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      count:countItem
    }
    );
  }

  checkout(CartId:string,Orderdetails:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId}?url=https://github.com/Mostafazabady`,
    {
      shippingAddress: Orderdetails
    }
    )
  }
}
