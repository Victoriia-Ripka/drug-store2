import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  @Input()
  product: any

  openedSection: "desc" | "reviews" = "reviews"

  changeOpenedSection(section: "desc" | "reviews") {
    this.openedSection = section
  }
}

