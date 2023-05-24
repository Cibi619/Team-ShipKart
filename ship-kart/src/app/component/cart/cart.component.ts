import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
public cartList:any[]=[];
public totalPrice:number=0;
constructor(private cartService:CartService){}
ngOnInit(): void {
  this.cartService.CartList$.subscribe((val)=>{
    this.cartList=val;
  })
  this.cartService.totalPrice$.subscribe((x)=>{
    this.totalPrice=x.toFixed(2);
  })
  // this.totalPrice=this.cartService.totalPrice;
}
removeItem(id:any){
  this.cartService.removeItem(id);
}
printPage(){
  window.print()
}

}
