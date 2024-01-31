import { authGuard } from './auth.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DetailsComponent } from './components/details/details.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:"", component:BlankLayoutComponent, children:[
    {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'home', canActivate:[authGuard] ,component:HomeComponent},
  {path:'details/:id', canActivate:[authGuard] ,component:DetailsComponent},
  {path:'products', canActivate:[authGuard] ,component:ProductComponent},
  {path:'categories', canActivate:[authGuard] ,component:CategoriesComponent},
  {path:'brands', canActivate:[authGuard] ,component:BrandsComponent},
  {path:'cart', canActivate:[authGuard] ,component:CartComponent},
  {path:'payment/:id', canActivate:[authGuard] ,component:PaymentComponent},
  ]},

  {path:'',component:AuthLayoutComponent, children:[
      {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  ]},




  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes    , {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
