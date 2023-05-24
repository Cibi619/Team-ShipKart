import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeModule } from './modules/home/home.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { HostBindingDirective } from './host-bindin.directive';
import { ApiService } from './service/api.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductDtlModule } from './modules/productDtls/product-dtls.module';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    HostBindingDirective,
  ],
  imports: [
    BrowserModule, 
    HomeModule,
    MatFormFieldModule,
    MatGridListModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ProductDtlModule,
    ProductModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
