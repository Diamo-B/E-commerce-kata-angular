import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls:["./product-rating.component.css"]
})
export class ProductRatingComponent {
  @Input() productRating:number|undefined
  ratings = [1, 2, 3, 4, 5];
  starFilling(starIndex: number, rate: number):string{
    let className = "star-icon ";
    const difference = rate - starIndex;

    if (difference === 0.5) {
        className += "filled half-filled";
    } else if (difference >= 0.3) {
        className += "filled";
    } else {
        className += "outlined";
    }

    return className;
  };
}
