import { Component } from '@angular/core';
import { ShippingInfoComponent, ShippingMethodComponent, ShoppingCartComponent, CompletedPurchaseComponent } from './components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shopping-cart-page',
  standalone: true,
  imports: [ShippingInfoComponent, ShippingMethodComponent, ShoppingCartComponent, CompletedPurchaseComponent, CommonModule],
  templateUrl: './shoppingCartPage.component.html',
  styleUrl: './shoppingCartPage.component.scss'
})
export class ShoppingCartPageComponent {
  purchasePhase: 'cart' | 'shipping-info' | 'shipping-method' | 'completed' = 'cart';

  togglePhase(phase: 'cart' | 'shipping-info' | 'shipping-method' | 'completed'): void {
    this.purchasePhase = phase;
  }
}
