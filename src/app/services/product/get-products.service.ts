import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/common/product/product';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };
  constructor(private httpClient : HttpClient) { 

  }
  getProducts()
  {
    let baseUrl ="http://localhost:8088/basic/products";
    return this.httpClient.get<Product[]>(baseUrl,this.httpOptions);
  }
  getProduct(id: string) {
    let baseUrl ="http://localhost:8088/products/"+id;
    return this.httpClient.get<Product>(baseUrl,this.httpOptions);
  }
}
