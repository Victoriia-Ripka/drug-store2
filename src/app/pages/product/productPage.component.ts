import { Component } from '@angular/core';
import { ProductHeroComponent, ProductDoseComponent, ProductInfoComponent } from './components';
import { ProductsService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-page',
  standalone: true,
  imports: [ProductHeroComponent, ProductDoseComponent, ProductInfoComponent ],
  templateUrl: './productPage.component.html'
})
export class ProductPageComponent {
  product: any

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.product = this.productsService.getProduct(productId);
      this.product["packages"] = packages;
    })
  }
}

const packages = [
  {
    "package": '10 pills x 0.5mg',
    "per-pill": "2.33",
    "per-pack": "23.30",
  },
  {
    "package": '20 pills x 0.5mg',
    "per-pill": "2.33",
    "per-pack": "23.30",
  },
  {
    "package": '30 pills x 0.5mg',
    "per-pill": "1.92",
    "per-pack": "57.56",
  },
  {
    "package": '60 pills x 0.5mg',
    "per-pill": "1.76",
    "old-price": "279.60",
    "discount": "24%",
    "per-pack": "211.75",
    "shipping": "Free airmall shipping"
  },
  {
    "package": '180 pills x 0.5mg',
    "per-pill": "1.75",
    "old-price": "418.94",
    "discount": "25%",
    "per-pack": "314.20",
    "shipping": "Free airmall shipping"
  },
  {
    "package": '270 pills x 0.5mg',
    "per-pill": "1.73",
    "old-price": "46.55",
    "discount": "13%",
    "per-pack": "40.43",
    "shipping": "Free airmall shipping"
  }
]
