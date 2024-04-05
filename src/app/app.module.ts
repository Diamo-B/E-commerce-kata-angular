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
import {ionMenu, ionCart, ionRemoveCircleOutline} from '@ng-icons/ionicons';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import {octHash} from "@ng-icons/octicons";
import { ProductCardComponent } from './product-card/product-card.component'

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
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ionCart, ionMenu, octHash, ionRemoveCircleOutline }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
