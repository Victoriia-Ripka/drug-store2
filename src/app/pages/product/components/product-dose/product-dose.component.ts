import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-dose',
  standalone: true,
  imports: [],
  templateUrl: './product-dose.component.html',
  styleUrl: './product-dose.component.scss'
})
export class ProductDoseComponent {
  @Input()
  product: any
}
