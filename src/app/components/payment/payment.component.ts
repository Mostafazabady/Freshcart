import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute, private _FormBuilder:FormBuilder, private _CartService:CartService){}

  checkForm:FormGroup = this._FormBuilder.group({
    details:[''],
    phone:[''],
    city:[''],
  })
 
  CartId:any =''

    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(parms)=>{
          this.CartId = parms.get('id');
          
        }
      })
    }

    handleForm():void{
      console.log(this.checkForm.value);
      this._CartService.checkout(this.CartId,this.checkForm.value).subscribe({
        next:(response)=>{
          window.open(response.session.url, '_self')          
        }
      })
    }
}
