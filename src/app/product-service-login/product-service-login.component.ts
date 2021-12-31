import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from '../common/app.constants';
import { Product } from '../common/product/product';
import { LoginService } from '../services/product-login/login.service';
import { TokenStorageService } from '../services/token/token-storage.service';

@Component({
  selector: 'app-product-service-login',
  templateUrl: './product-service-login.component.html',
  styleUrls: ['./product-service-login.component.css']
})
export class ProductServiceLoginComponent implements OnInit {

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    currentUser: any;
    githubURL = AppConstants.GITHUB_AUTH_URL;
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
        private loginService: LoginService,
        private tokenStorage : TokenStorageService 
    ) {
    }

    ngOnInit() {
        const token = this.route.snapshot.queryParamMap.get('token');
        const error = this.route.snapshot.queryParamMap.get('error');
        alert(this.tokenStorage.getToken()+":"+token);
          if (this.tokenStorage.getToken()) {
          this.isLoggedIn = true;
          console.log(token);
          this.router.navigate(["/getall"]);
        }
          else if(token){
              this.tokenStorage.saveToken(token);
              this.loginService.getCurrentUser().subscribe(
                    data => {
                      this.login(data);
                    },
                    err => {
                      this.errorMessage = err.error.message;
                      this.isLoginFailed = true;
                    }
                );
          }
          else if(error){
              this.errorMessage = error;
            this.isLoginFailed = true;
          }
    }

    onSubmit() {
    } 
    login(user : any): void {
        this.tokenStorage.saveUser(user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.currentUser = this.tokenStorage.getUser();
        this.router.navigate(["/getall"]);
      }
}
