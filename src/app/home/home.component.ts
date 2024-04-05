import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../types/Product';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  products:Product[] = []
  selectedCat: string|null=null;
  constructor(private prodService:ProductsService, private catService:CategoriesService){}

  ngOnInit(): void {
    this.prodService.products$.subscribe((products: any[]) => {
      this.products = products;
    });
    this.catService.getSelectedCat().subscribe((cat:string|null) => {
      this.selectedCat = cat
    });
  }
  removeFilter() {
    this.catService.setSelectedCat(null)
  }
}
