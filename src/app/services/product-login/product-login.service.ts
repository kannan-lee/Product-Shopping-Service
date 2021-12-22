import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/common/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductLoginService {

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };
  constructor(private httpClient : HttpClient) { }

  getProduct()
  {
    let baseUrl ="http://localhost:8088/msg";
    //baseUrl=baseUrl.concat(bugId.toString());
    console.log(baseUrl);
    return this.httpClient.get<Product>(baseUrl,this.httpOptions);
  }
}
