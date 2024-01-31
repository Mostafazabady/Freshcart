import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent implements OnInit {
  constructor(private _Router:Router, private _CartService:CartService, private _Renderer2:Renderer2){}
  cartCount:number | undefined;

    @ViewChild('nav') navElement!:ElementRef
    @HostListener('window:scroll')
    onScroll(){
      if (window.scrollY > 400) {
        this._Renderer2.addClass(this.navElement.nativeElement,  'px-5')
      }else{
        this._Renderer2.removeClass(this.navElement.nativeElement,  'px-5')
      }
    }

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        this.cartCount=data;
      }
    })

    this._CartService.getProductFormCart().subscribe({
      next:(response)=>{
        this.cartCount= response.numOfCartItems;
        
      }
    })
  }
signOut():void{
  localStorage.removeItem('_token')
  this._Router.navigate(['/login'])
}
}
