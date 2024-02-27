import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-dose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-dose.component.html',
  styleUrl: './product-dose.component.scss'
})
export class ProductDoseComponent {
  @Input()
  product: any

  showProductTable = true;

  addPackageToCart(id: number): void {
    console.log(id)
  }

  toggleProductTable(): void {
    this.showProductTable = !this.showProductTable;
  }
}
