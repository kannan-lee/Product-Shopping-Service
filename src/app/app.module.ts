import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductServiceLoginComponent } from './product-service-login/product-service-login.component';
import { GetProductComponent } from './get-product/get-product.component';
import { GetProductsComponent } from './get-products/get-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { AuthHeaderInterceptor } from './common/auth-guard/auth-header.interceptor';
import { CallbackComponent } from './callback/callback.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductServiceLoginComponent,
    GetProductComponent,
    GetProductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    [{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthHeaderInterceptor,
      multi:true
    }],[{ provide: DEFAULT_TIMEOUT, useValue: 30000 }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
