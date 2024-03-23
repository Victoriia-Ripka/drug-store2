import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shopping-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss', '../../shoppingCartPage.component.scss']
})
export class ShoppingCartComponent {
  totalItems: number = 1;
  totalItemsPrice: number = 26.67;
  discountPrice: number = 3.95;
  subtotalPrice: number = 23.33;
  deliveryPrice: number = 23.33;
  vatPrice: number = 4;
  totalPrice: number = this.totalItemsPrice - this.discountPrice + this.deliveryPrice;
  deliveryFirm: string = 'venipak';
  toFreeDelivery: number = 60 - this.totalItemsPrice;

  @Output()
  nextPhase: EventEmitter<string> = new EventEmitter<string>()

  toNextPhase() {
    this.nextPhase.emit('shipping-info')
  }

  changedeliveryFirm(firm: string) {
    this.deliveryFirm = firm
  }
}
