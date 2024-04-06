import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarStartComponent } from './navbar/navbar-start/navbar-start.component';
import { NavbarCenterComponent } from './navbar/navbar-center/navbar-center.component';
import { NavbarEndComponent } from './navbar/navbar-end/navbar-end.component';
import { NgIconsModule } from '@ng-icons/core';
import {ionMenu, ionCart, ionRemoveCircleOutline, ionTrash, ionAdd, ionRemove, ionStar} from '@ng-icons/ionicons';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import {octHash} from "@ng-icons/octicons";
import { ProductCardComponent } from './product-card/product-card.component';
import { CartTableComponent } from './cart/cart-table/cart-table.component';
import { CartItemComponent } from './cart/cart-table/cart-item/cart-item.component';
import { QuantitySelectorComponent } from './cart/cart-table/quantity-selector/quantity-selector.component';
import { ProductRatingComponent } from './product-card/product-rating/product-rating.component';
import { CartTotalComponent } from './cart/cart-total/cart-total.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavbarStartComponent,
    NavbarCenterComponent,
    NavbarEndComponent,
    CartComponent,
    FooterComponent,
    ProductCardComponent,
    CartTableComponent,
    CartItemComponent,
    QuantitySelectorComponent,
    ProductRatingComponent,
    CartTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ionCart, ionMenu, octHash, ionRemoveCircleOutline, ionTrash, ionAdd, ionRemove, ionStar}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
