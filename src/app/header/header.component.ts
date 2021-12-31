import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/product-login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn : boolean | undefined;
  product= new FormGroup({
  id : new FormControl('',Validators.required)
  });
  constructor(private router:Router,private psLogin : LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.psLogin.isLoggedIn();
  }

  submit()
  {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['get',this.product.get('id')!.value]);
  }); 
  }
  logout()
  {
    this.psLogin.logout();
    this.router.navigate(['login']);
  }
}
