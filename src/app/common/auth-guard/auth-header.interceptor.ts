import { Injectable, InjectionToken } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductLoginService } from 'src/app/services/product-login/product-login.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private productLoginService : ProductLoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders:{
        Authorization : 'Bearer '+ this.productLoginService.getToken()
      }
    });
    return next.handle(req);
  }
}
