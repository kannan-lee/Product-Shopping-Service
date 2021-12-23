import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/common/product/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductLoginService {

  theProducts : Product[] | undefined;
  username:string | undefined;
  password:string | undefined;
  constructor(
    private httpClient : HttpClient,
    private router:Router) { }

  getLoginCredential(usern:string,pass:string)
  {
    this.username =usern;
    this.password =pass;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:'Basic '+btoa(this.username+':'+this.password)
      })
    };
    let baseUrl ="http://localhost:8088/basic/products";
    this.httpClient.get<Product[]>(baseUrl,httpOptions).subscribe(data=>{this.theProducts=data;this.router.navigate(['getall']);});
    console.log(this.theProducts?.toString());
  }
  getProducts()
  {
    return this.theProducts;
  }
}
