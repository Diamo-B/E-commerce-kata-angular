import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';
import { ICartItem } from 'src/app/types/Cart';
import { twMerge } from 'tailwind-merge';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent implements OnInit{
  @Input() Item:ICartItem|undefined
  @Input() isLast:boolean|undefined
  private productService:ProductsService = inject(ProductsService);
  private cartService:CartService = inject(CartService);

  ngOnInit(){
    console.log(this.Item)
  }

  sliceProductTitle(title:string, maxLength:number=15):string{
    return this.productService.sliceProductTitle(title,maxLength)
  }

  removeCartItem(id:number){
    this.cartService.removeCartItem(id);
  }

  mergeClasses(...classes: (string)[]): string {
    return twMerge(...classes.filter(c => !!c));
  }
  
}
