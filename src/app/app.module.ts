import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './cart/cart.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CutTextPipe } from './cut-text.pipe';
import { DetailsComponent } from './components/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentComponent } from './components/payment/payment.component';
import { ToastrModule } from 'ngx-toastr';
import { MyhttpInterceptor } from './myhttp.interceptor';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BrandsComponent,
    CategoriesComponent,
    LoginComponent,
    RegisterComponent,
    NavbarAuthComponent,
    NavbarBlankComponent,
    NotfoundComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    CutTextPipe,
    DetailsComponent,
    PaymentComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:MyhttpInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
