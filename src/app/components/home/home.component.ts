import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  toastr: any;

  term:string = '';
   
  constructor(private _ApiDataService:ApiDataService, private _CartService:CartService, private _ToastrService:ToastrService){}
  products:any[] = [];
  categories:any[] = [];
  ngOnInit(): void {
    this._ApiDataService.getProducts().subscribe({
      next:(response)=>{
        this.products = response.data;
      }
    })  


    this._ApiDataService.getCategories().subscribe({
      next:(response)=>{
        this.categories = response.data;
        
      }
    })
  }

  addProduct(id:string):void{
    this._CartService.addProductToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._CartService.cartNumber.next(response.numOfCartItems)
        this._ToastrService.success(response.message);
      }
    })
  }





}
