import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProductComponent } from './get-product/get-product.component';
import { GetProductsComponent } from './get-products/get-products.component';

const routes: Routes = [
  {path :'',component: GetProductsComponent},
  {path: 'get/:id', component : GetProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
