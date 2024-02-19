import { Component } from '@angular/core';
import { FaqOrderingComponent, FaqProductsComponent, FaqShippingComponent } from './components';

@Component({
  selector: 'faq-page',
  standalone: true,
  imports: [FaqOrderingComponent, FaqProductsComponent, FaqShippingComponent],
  templateUrl: './faqPage.component.html',
  styleUrl: './faqPage.component.scss'
})
export class FaqPageComponent { }
