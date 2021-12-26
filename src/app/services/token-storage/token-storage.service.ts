import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/consts/global-constants';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private httpClient:HttpClient) { }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(){
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public fetchToken(code:string,state : string) : Observable<any>{
    return this.httpClient.get(GlobalConstants.GITHUB_TOKEN_ENDPOINT_URL+"?code="+code+"&state="+state);
  }

}
