import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from '../common/consts/global-constants';
import { Product } from '../common/product/product';
import { ProductLoginService } from '../services/product-login/product-login.service';
import { TokenStorageService } from '../services/token-storage/token-storage.service';

@Component({
  selector: 'app-product-service-login',
  templateUrl: './product-service-login.component.html',
  styleUrls: ['./product-service-login.component.css']
})
export class ProductServiceLoginComponent implements OnInit {
    msg : Product | undefined;
    loginForm: FormGroup =this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    currentUser: any;
    githubUrl = GlobalConstants.GITHUB_AUTH_URL;
    constructor(
        private formBuilder: FormBuilder,
        private productLoginService: ProductLoginService
    ) {
        
    }

    ngOnInit() {
    }
    onSubmit(){

    }
    login()
    {
        this.productLoginService.login();
    }

}
