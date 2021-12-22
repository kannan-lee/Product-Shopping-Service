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
    loading = false;
    submitted = false;
    returnUrl: string ="";

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private productLoginService: ProductLoginService
    ) {
        // redirect to home if already logged in
/*         if (this.productLoginService.currentUserValue) {
            this.router.navigate(['/']);
        } */
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.productLoginService.getProduct().subscribe(
            data=>{this.msg=data}
          )
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        //this.alertService.clear();

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

       this.loading = true;
    } 

}
