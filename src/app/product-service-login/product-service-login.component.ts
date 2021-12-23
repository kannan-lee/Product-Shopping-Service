import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../common/product/product';
import { ProductLoginService } from '../services/product-login/product-login.service';

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

    constructor(
        private formBuilder: FormBuilder,
        private productLoginService: ProductLoginService
    ) {
        // redirect to home if already logged in
/*         if (this.productLoginService.currentUserValue) {
            this.router.navigate(['/']);
        } */
    }

    ngOnInit() {
    }

    onSubmit() {
        this.productLoginService.getLoginCredential(this.loginForm.get('username')?.value,this.loginForm.get('password')?.value)
    } 

}
