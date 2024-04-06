import { EventEmitter, Injectable, Output } from '@angular/core';
import { ICartItem } from './types/Cart';
import { Product } from './types/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items: ICartItem[] = [];

  @Output() cartUpdated = new EventEmitter<ICartItem[]>();

  addCartItem(product: Product) {
    if (!this.items.some((item) => item.product.id === product.id))
      this.items = [...this.items, { product: product, quantity: 1 }];
  }

  removeCartItem(id: number) {
    this.items = [...this.items.filter((item) => item.product.id !== id)];
    this.cartUpdated.emit(this.items);
  }

  incrementQuantity(id: number) {
  this.items = [...this.items.map((item) => {
    if (item.product.id === id && item.quantity >= 1) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  })]

  this.cartUpdated.emit(this.items);
  
}

decrementQuantity(id: number) {
  this.items = [...this.items.map((item) => {
    if (item.product.id === id && item.quantity > 1) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }
    return item;
  })]
  this.cartUpdated.emit(this.items); 
}

  
}
