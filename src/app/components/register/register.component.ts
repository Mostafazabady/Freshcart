import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

errMsg:string = ''
isLoading:boolean = false; 
constructor(private _AuthService:AuthService,private _Router:Router){}


 registerForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, {validators:[this.ConfirmPassword]}  as FormControlOptions);


  ConfirmPassword(group:FormGroup):void{
    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if (rePassword?.value === '') {
      rePassword.setErrors({required:true})
    }

    else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({mismatch:true})
    }

  }




handleForm()  {  
  this.isLoading = true; 
  const userData = this.registerForm.value;
  const isValid = this.registerForm.valid;
  if (isValid) {
    this._AuthService.registerForm(userData).subscribe({
      next:(response)=>{
        if (response.message === 'success') {
          this._Router.navigate(['/login'])
          this.isLoading = false; 

        }
        console.log(response);
      },
      error:(err)=>{
        this.errMsg = err.error.message
        this.isLoading = false; 

      }
    })
  }
  
}






}


