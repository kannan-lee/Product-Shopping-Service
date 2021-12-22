import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product/product';
import { GetProductsService } from '../services/product/get-products.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {

  theProducts : Product[] | undefined;
  theProduct : Product = new Product();
  constructor(private getProductsService : GetProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts()
  {
    
    this.getProductsService.getProducts().subscribe(data=>{this.theProducts=data});
  }
}
