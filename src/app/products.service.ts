import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './environments/env';
import { Product } from './types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private originalProducts: Product[] = [];
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Method to fetch data
  fetchData(): void {
    this.http.get<Product[]>(environment.productsBaseURL).subscribe((data: Product[]) => {
      this.originalProducts = data;
      this.productsSubject.next(data);
    });
  }

  sliceProductTitle(title: string, maxLength: number = 15): string {
    if (title.length > maxLength) {
        return title.slice(0, maxLength) + " ...";
    } else {
        return title.padEnd(maxLength);
    }
  }


  filterProducts(cat:string|null): void {
    if (!cat) {
      this.productsSubject.next(this.originalProducts); // If no category is selected, show all products
    } else {
      this.productsSubject.next(this.originalProducts.filter(product => product.category === cat));
    }
  }


  // Method to get a copy of the original products array
  getOriginalProducts(): Product[] {
    return [...this.originalProducts];
  }

  // Method to reset products$ to the original data
  resetProducts(): void {
    this.productsSubject.next(this.originalProducts);
  }
}
