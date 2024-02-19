import { Component } from '@angular/core';
import { HeroProductsComponent, ProductsComponent } from './components';
import { TestimonialsComponent } from '../home/components';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [HeroProductsComponent, ProductsComponent, TestimonialsComponent],
  templateUrl: './productsPage.component.html'
})
export class ProductsPageComponent { }
