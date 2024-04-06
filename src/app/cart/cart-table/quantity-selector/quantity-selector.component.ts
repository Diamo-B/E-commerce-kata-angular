import { Component, Input, OnInit, inject } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ICartItem } from 'src/app/types/Cart';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html'
})
export class QuantitySelectorComponent {
  @Input() Item:ICartItem|undefined;

  private cartService:CartService = inject(CartService);

  incrementQuantity(itemId:number):void{
    this.cartService.incrementQuantity(itemId)
  }

  decrementQuantity(itemId:number):void{
    this.cartService.decrementQuantity(itemId)
  }
}
