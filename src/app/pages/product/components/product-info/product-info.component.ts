import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-info',
  standalone: true,
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  @Input()
  product: any
}
