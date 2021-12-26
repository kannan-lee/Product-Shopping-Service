import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/common/consts/global-constants';
import { Product } from 'src/app/common/product/product';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private httpClient : HttpClient) { 

  }
  getProducts()
  {
    let getAllUrl =GlobalConstants.API_URL+"products";
    return this.httpClient.get<Product[]>(getAllUrl);
  }
  getProduct(id: string) {
    let baseUrl =GlobalConstants.API_URL+"products/"+id;
    return this.httpClient.get<Product>(baseUrl);
  }
}
