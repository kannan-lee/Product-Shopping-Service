import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/common/product/product';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/common/app.constants';
import { TokenStorageService } from '../token/token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http : HttpClient,private tokenStorage : TokenStorageService) { }
  getCurrentUser(): Observable<any> {
    return this.http.get(AppConstants.API_URL + 'user/me', httpOptions);
  }
  
  logout(){
    this.tokenStorage.signOut();
  }

  isLoggedIn()
  {
    return this.tokenStorage.getToken()!=null;
  }
}
