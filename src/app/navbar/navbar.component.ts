import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() categories: string[] = [];
  @Input() setSelectedCat: (cat: string|null)=>void = ()=>{};
}
