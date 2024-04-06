import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-navbar-end',
  templateUrl: './navbar-end.component.html'
})
export class NavbarEndComponent {
  private service = inject(CartService);

  getItemsLength():number{
    return this.service.items?.length || 0
  }

}
