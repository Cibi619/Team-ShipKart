import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { ProductsComponent } from "./component/products.component";
import { HttpClientModule } from "@angular/common/http";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";


@NgModule({
    declarations: [ProductsComponent],
    imports:[CommonModule,
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
    ]

})
export class ProductModule{};