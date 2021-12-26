import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ProductLoginService } from '../services/product-login/product-login.service';
import { TokenStorageService } from '../services/token-storage/token-storage.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router,private tokenStorage : TokenStorageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p=>{
      this.tokenStorage.fetchToken(p['code'],p['state']).subscribe(data=>{
          this.tokenStorage.saveToken(p['token']);          
          this.router.navigate(['getall']);
          window.location.reload();
      })
    })
  }

}
