import { Component, Input } from '@angular/core';
import { Product } from '../types/Product';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product:Product|undefined;

  constructor(private productService:ProductsService, private cartService:CartService){}

  sliceProductTitle(title:string, maxLength:number=15):string{
    return this.productService.sliceProductTitle(title,maxLength)
  }

  addToCart(product:Product):void{
    this.cartService.addCartItem(product)
  }
}
