import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/types/Cart';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html'
})
export class CartTotalComponent implements OnInit, OnChanges {
  @Input() Items:ICartItem[]=[]
  subTotal:number = 0

  ngOnInit(): void {
    this.calculateSubTotal();
  }

  ngOnChanges():void{
    this.calculateSubTotal()
  }

  calculateSubTotal() {
    this.subTotal=0
    this.Items.map((item:ICartItem)=>{
      this.subTotal+=item.product.price*item.quantity
    })
  }
}
