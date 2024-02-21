import { Component } from '@angular/core';
import { HeroProductsComponent, ProductsComponent } from './components';
import { TestimonialsComponent } from '../home/components';
// import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [HeroProductsComponent, ProductsComponent, TestimonialsComponent],
  templateUrl: './productsPage.component.html'
})
export class ProductsPageComponent { }
