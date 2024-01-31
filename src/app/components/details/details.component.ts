import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 1
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  constructor(private _ActivatedRoute:ActivatedRoute,private _ApiDataService:ApiDataService){}
  productId:any;
  productDetails:any = null;
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(parms)=>{
      this.productId = parms.get('id')
    }
    
  })

  this._ApiDataService.getProductsDetails(this.productId).subscribe({
    next:(respose)=>{
      this.productDetails = respose.data;
      
    }
  })


}


}
