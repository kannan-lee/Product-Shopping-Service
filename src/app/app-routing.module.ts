import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProductComponent } from './get-product/get-product.component';
import { GetProductsComponent } from './get-products/get-products.component';
import { ProductServiceLoginComponent } from './product-service-login/product-service-login.component';

const routes: Routes = [
  {path :'',redirectTo:"login", pathMatch: 'full'},
  {path :'getall',component: GetProductsComponent},
  {path:'login',component: ProductServiceLoginComponent},
  {path: 'get/:id', component : GetProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
