import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/consts/global-constants';
import { TokenStorageService } from '../token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductLoginService {

  constructor(private tokenStorage :TokenStorageService) { }

  login(){
    window.open(GlobalConstants.GITHUB_AUTH_URL,'_self');
  }
  isLoggedIn(){
    return this.tokenStorage.getToken()!=null;
  }
}
