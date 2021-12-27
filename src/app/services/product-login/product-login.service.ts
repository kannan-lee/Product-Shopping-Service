import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/consts/global-constants';
import { TokenStorageService } from '../token-storage/token-storage.service';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class ProductLoginService {

  constructor(private httpClient : HttpClient) { }

  login(){
    window.open(GlobalConstants.GITHUB_AUTH_URL,'_self');
  }
  isLoggedIn(){
    return this.getToken()!=null;
  }
  public saveToken(token: string): void {
    console.log(token);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(){
    console.log('hello');
    return localStorage.getItem(TOKEN_KEY);
  }
  public fetchToken(code:string,state : string) : Observable<any>{
    return this.httpClient.get(GlobalConstants.GITHUB_TOKEN_ENDPOINT_URL+"?code="+code+"&state="+state);
  }
  signOut(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
