import { Component } from '@angular/core';
import { ProductHeroComponent, ProductDoseComponent, ProductInfoComponent } from './components';

@Component({
  selector: 'product-page',
  standalone: true,
  imports: [ProductHeroComponent, ProductDoseComponent, ProductInfoComponent ],
  templateUrl: './productPage.component.html',
  styleUrl: './productPage.component.scss'
})
export class ProductPageComponent {

}
