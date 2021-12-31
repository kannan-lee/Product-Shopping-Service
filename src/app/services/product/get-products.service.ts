import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/common/app.constants';
import { Product } from 'src/app/common/product/product';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private httpClient : HttpClient) { 

  }
  getProducts()
  {
    let baseUrl =AppConstants.API_URL+"products";
    return this.httpClient.get<Product[]>(baseUrl,this.httpOptions);
  }
  getProduct(id: string) {
    let baseUrl =AppConstants.API_URL+"products/"+id;
    return this.httpClient.get<Product>(baseUrl,this.httpOptions);
  }
}
