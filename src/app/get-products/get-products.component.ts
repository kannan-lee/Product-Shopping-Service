import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/auth-guard/user.service';
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
  content:string |undefined;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts()
  {
    
    this.userService.getPublicContent().subscribe(
      data => {
        this.theProducts = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
