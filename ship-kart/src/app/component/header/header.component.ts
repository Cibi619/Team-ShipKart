import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
public search:any;
constructor(private ApiService:ApiService){

}
onSearch(){
  this.ApiService.setSearch(this.search);
}
}
