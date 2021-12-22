import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  product= new FormGroup({
  id : new FormControl('',Validators.required)
  });
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit()
  {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['get',this.product.get('id')!.value]);
  }); 
    
  }
}
