import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartItem } from '../types/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  private cartService: CartService = inject(CartService);
  items: ICartItem[] = [];

  ngOnInit() {
    this.items = this.cartService.items;
    this.cartService.cartUpdated.subscribe((updatedItems) => {
      this.items = updatedItems;
    });
  }

  removeItem(id: number): void {
    this.cartService.removeCartItem(id);
  }
}
