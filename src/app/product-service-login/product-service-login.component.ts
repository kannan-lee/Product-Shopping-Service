import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../common/auth-guard/auth.service';
import { UserService } from '../common/auth-guard/user.service';
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
    sform: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    currentUser: any;
    githubURL = GlobalConstants.GITHUB_AUTH_URL;
    constructor(
        private formBuilder: FormBuilder,private router:Router,
        private authService: AuthService, private tokenStorage: TokenStorageService, private route: ActivatedRoute, private userService: UserService
    ) {
        
    }

    ngOnInit() {
        const token: string = this.route.snapshot.queryParamMap.get('token')+"";
        const error: string = this.route.snapshot.queryParamMap.get('error')+"";
          if (this.tokenStorage.getToken()) {
          this.isLoggedIn = true;
          this.currentUser = this.tokenStorage.getUser();
        }
          else if(token){
              this.tokenStorage.saveToken(token);
              this.userService.getCurrentUser().subscribe(
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
    onSubmit(){

    }
    login(user : any){
        this.tokenStorage.saveUser(user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.currentUser = this.tokenStorage.getUser();
        this.router.navigate(['getall']);
        window.location.reload();
      }

}
