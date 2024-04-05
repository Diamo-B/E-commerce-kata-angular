import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-start',
  templateUrl: './navbar-start.component.html'
})
export class NavbarStartComponent {
  @Input() categories: string[] = [];
  @Input() setSelectedCat: (cat: string|null)=>void = ()=>{};
}
