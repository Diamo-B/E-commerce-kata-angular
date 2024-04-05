import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-center',
  templateUrl: './navbar-center.component.html'
})
export class NavbarCenterComponent {
  @Input() categories: string[] = [];
  @Input() setSelectedCat: (cat: string|null)=>void = ()=>{};
}
