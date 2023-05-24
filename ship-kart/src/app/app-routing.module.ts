import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './modules/home/pages/home.component';
import { ProductsComponent } from './modules/product/component/products.component';
import { ProductDtlsComponent } from './modules/productDtls/component/product-dtls.component';
const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path :'home',component:HomeComponent},
   {path:'products', component: ProductsComponent},
 // {path:'products', loadChildren:()=>},
  {path:'cart', component: CartComponent},
  {path:'productdtls',component:ProductDtlsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
