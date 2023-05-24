import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Guid } from 'guid-typescript';
@Injectable({
  providedIn: 'root'
})
export class CartService {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
private _cart = new BehaviorSubject<any>([]);
CartList$= this._cart.asObservable();
private _totalPrice= new BehaviorSubject<any>(0);
totalPrice$= this._totalPrice.asObservable();

private CartList:any[]=[];

public totalPrice:any=0;

addCart(product:any){
debugger;
  let temp=product;
  this.totalPrice=this.totalPrice+temp.price;
  this._totalPrice.next(this.totalPrice);
  Object.assign(temp,{cartId:Guid.create()});
  this.CartList.push(temp);
  this._cart.next(Object.assign([],this.CartList));
  console.log(this.CartList$);
  console.log(this.CartList);
}
removeItem(prd:any){
  debugger;
  this.totalPrice=this.totalPrice-prd.price;
  this._totalPrice.next(this.totalPrice);
  this.CartList= this.CartList.filter(x=>
    x.cartId.value !=prd.cartId.value);
  this._cart.next(Object.assign([],this.CartList));
}
emptyCart(){
  this.CartList=[];
 
}
  constructor() { }
}
