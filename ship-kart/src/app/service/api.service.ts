import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public productDtl!:BehaviorSubject<any>;
  private product$ = new BehaviorSubject<any>({});
  selectedProduct$ = this.product$.asObservable();
  
  private productSearch= new BehaviorSubject<any>('');
  searchResult=this.productSearch.asObservable();
  constructor(private http : HttpClient) {
    this.productDtl = new BehaviorSubject<any>('');
   }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }))
  }
 
  productDtls(id:any){
    const url="https://fakestoreapi.com/products/"+id;
      return this.http.get<any>(url)
      .pipe(map((res:any)=>{
        this.productDtl=res;       
        return res;
      }))
  }
  setProduct(product: any) {
    //console.log(product);
    this.product$.next(product);
  }
  setSearch(query:any){
    
    this.productSearch.next(query);
    
  }
}
