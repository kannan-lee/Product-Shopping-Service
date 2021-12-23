import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../common/product/product';
import { ProductLoginService } from '../services/product-login/product-login.service';
import { GetProductsService } from '../services/product/get-products.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {

  theProducts : Product[] | undefined;
  theProduct : Product = new Product();
  constructor(private getProductsLoginService : ProductLoginService,private route : ActivatedRoute, private getProductsService : GetProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts()
  {

    this.theProducts=this.getProductsLoginService.getProducts();
    //this.getProductsService.getProducts().subscribe(data=>{this.theProducts=data});
  }
}
