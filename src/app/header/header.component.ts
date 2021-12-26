import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductLoginService } from '../services/product-login/product-login.service';
import { TokenStorageService } from '../services/token-storage/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  product= new FormGroup({
  id : new FormControl('',Validators.required)
  });
  constructor(private router:Router,private productLoginService : ProductLoginService,private tokenStore : TokenStorageService) { }
  isLoggedIn :boolean =false;
  ngOnInit(): void {
    this.isLoggedIn=this.productLoginService.isLoggedIn();
  }

  submit()
  {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['get',this.product.get('id')!.value]);
  });   
  }
  logout(){
    this.tokenStore.signOut();
    this.router.navigate(['']);
    window.location.reload();
  }
}
