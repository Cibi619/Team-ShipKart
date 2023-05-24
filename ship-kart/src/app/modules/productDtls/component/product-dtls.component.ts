import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-dtls',
  templateUrl: './product-dtls.component.html',
  styleUrls: ['./product-dtls.component.scss']
})
export class ProductDtlsComponent implements OnInit {
  public selectedProduct:any;
  
  constructor(private api:ApiService, private _cartService:CartService){}
ngOnInit(): void {
  this.api.selectedProduct$.subscribe((value) => {
    this.selectedProduct = value;
    console.log("prd");
    console.log(value);  
  });
}
addToCart(product:any){
  this._cartService.addCart(product);	
  
}

emptyCart(){
	this._cartService
}
}
