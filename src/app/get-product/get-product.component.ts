import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../common/product/product';
import { GetProductsService } from '../services/product/get-products.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {

  theProduct : Product = new Product();
  constructor(private route: ActivatedRoute,private getProductsService : GetProductsService) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['id']);
  }
  getProduct(id:string)
  {
    this.getProductsService.getProduct(id).subscribe(data=>{this.theProduct=data});
  }
}
