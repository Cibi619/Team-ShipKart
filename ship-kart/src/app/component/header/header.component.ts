import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
public search:any;
public cartList:any[]=[];
constructor(private ApiService:ApiService,private cartService:CartService){
  
}
ngOnInit(): void {
  this.cartService.CartList$.subscribe((val)=>{
    this.cartList=val;
  })
}
onSearch(){
  this.ApiService.setSearch(this.search);
}
}
