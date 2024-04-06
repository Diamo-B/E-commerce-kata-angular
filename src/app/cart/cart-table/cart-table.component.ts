import { Component, Input } from '@angular/core';
import { ICartItem } from 'src/app/types/Cart';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html'
})
export class CartTableComponent {
  @Input() Items:ICartItem[] = []
}
