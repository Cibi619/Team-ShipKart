import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-dtls',
  templateUrl: './product-dtls.component.html',
  styleUrls: ['./product-dtls.component.scss']
})
export class ProductDtlsComponent implements OnInit {
  public selectedProduct:any;
  constructor(private api:ApiService){}
ngOnInit(): void {
  this.api.selectedProduct$.subscribe((value) => {
    this.selectedProduct = value;
    console.log("prd");
    console.log(value);
  });
}
}
