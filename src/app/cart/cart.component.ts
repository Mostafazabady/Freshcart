import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}
  cartData: any = {};
  ngOnInit(): void {
    this._CartService.getProductFormCart().subscribe({
      next: (response) => {
        this.cartData = response.data;
        console.log(response);
        
      },
    });
  }


  removeCartProudect(id:string):void{
    this._CartService.removeCartProduct(id).subscribe({
      next:(response)=>{
        this.cartData = response.data   
        this._CartService.cartNumber.next(response.numOfCartItems)     
      }
      
    })
    
  }


  changeCount(Count:number, id:string):void{
    if (Count >= 1) {
      this._CartService.updateCart(id,Count).subscribe({
  next:(response)=>{
    this.cartData = response.data   
  }
})
    }

  }
}
