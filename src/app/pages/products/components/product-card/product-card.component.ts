import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input()
  title: string = '';
  @Input()
  substance: string = '';
  @Input()
  price: number = 0;
  @Input()
  id: number = 0;
  @Input()
  img: string = 'a.png';

  constructor(private router: Router) { }

  goToProductDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}
