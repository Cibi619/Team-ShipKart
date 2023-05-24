import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private api:ApiService, private cartService:CartService){}
  public productList:any;
  public filterCategory:any[]=[];
  // public prdById:any;
   public search:any='';
ngOnInit(): void {
  this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        // if(a.category ==="women's clothing" || a.category ==="men's clothing"){
        //   a.category ="fashion" 
        // }
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  this.api.searchResult.subscribe(res=>{
    this.search=res;
    console.log(this.search);
    this.filterItems();
  });
}
filterSelect(cat:any){
  console.log(cat);
  if(cat==null ||cat==""){
    this.filterCategory= this.productList;
  }
  else{
    this.filterCategory=this.productList.filter((x:any)=>{if(x.category===cat)return x});
    
  }
}
filterItems( ) {
 //debugger;
  if(this.search!=''){
    console.log(this.filterCategory);
  this.filterCategory= this.productList.filter((el:any) => el.title.toLowerCase().includes(this.search.toLowerCase()));
  
}

}
onSelectedProduct(product:any) {
  this.api.setProduct(product);
}
addToCart(product:any){
  this.cartService.addCart(product);
}
}
