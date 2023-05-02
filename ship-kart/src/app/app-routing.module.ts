import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  {
    path: 'products',
    component:ProductsComponent ,
    outlet: 'popup'
  },
  {
    path: 'cart',
    component:CartComponent ,
    outlet: 'popup'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
