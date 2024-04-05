import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Product } from './types/Product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  categories: string[] = []; 
  filteredProducts: Product[] = [];
  selectedCat: string|null = null;
  constructor(private catService: CategoriesService, private productsService: ProductsService) {
    this.setSelectedCat = this.setSelectedCat.bind(this);
  }

  ngOnInit(): void {
    this.catService.fetchData().subscribe((data: string[]) => {
      this.categories = data;
    });
    this.productsService.fetchData();
    // Subscribe to changes in selectedCat
    this.catService.getSelectedCat().subscribe((cat:string|null) => {
      this.selectedCat = cat
      this.productsService.filterProducts(cat);
    });
  }

  setSelectedCat(cat:string|null){
    this.catService.setSelectedCat(cat)
  }
}
