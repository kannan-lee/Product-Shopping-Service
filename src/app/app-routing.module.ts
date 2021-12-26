import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './common/auth-guard/auth.guard';
import { GetProductComponent } from './get-product/get-product.component';
import { GetProductsComponent } from './get-products/get-products.component';
import { HomeComponent } from './home/home.component';
import { ProductServiceLoginComponent } from './product-service-login/product-service-login.component';

const routes: Routes = [
  {path :'',redirectTo:"/getall",pathMatch:"full"},
  {path :'callback',component: CallbackComponent},
  {path :'login',component: ProductServiceLoginComponent},
  {path :'getall',component: GetProductsComponent,canActivate:[AuthGuard]},
  {path: 'get/:id', component : GetProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
