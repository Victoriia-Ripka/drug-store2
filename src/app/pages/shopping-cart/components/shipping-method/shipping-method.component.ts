import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'shipping-method',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.scss', '../../shoppingCartPage.component.scss']

})
export class ShippingMethodComponent {
  @Output()
  nextPhase: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  shippingInfoPhase: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  cartPhase: EventEmitter<string> = new EventEmitter<string>();

  totalItems: number = 1;
  totalItemsPrice: number = 26.67;
  discountPrice: number = 3.95;
  subtotalPrice: number = 23.33;
  deliveryPrice: number = 23.33;
  vatPrice: number = 4;
  totalPrice: number = this.totalItemsPrice - this.discountPrice + this.deliveryPrice;
  deliveryFirm: string = 'venipak';
  toFreeDelivery: number = 60 - this.totalItemsPrice;

  selectedPaymentMethod: 'credit' | 'paypal' | 'googlepay' | '' = 'credit';
  validForm: boolean = false;
  paymentForm = new FormGroup({
    number: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  get numberControl() {
    return this.paymentForm.get('number') as FormControl;
  }

  get cardNameControl() {
    return this.paymentForm.get('name') as FormControl;
  }

  get dateControl() {
    return this.paymentForm.get('date') as FormControl;
  }

  get codeControl() {
    return this.paymentForm.get('code') as FormControl;
  }

  toCartPhase() {
    this.cartPhase.emit('cart');
  }

  toShippingInfoPhase() {
    this.shippingInfoPhase.emit('shipping-info');
  }

  toNextPhase() {
    this.nextPhase.emit('completed');
  }  

  selectMethod(method: 'credit' | 'paypal' | 'googlepay' | '') {
    this.selectedPaymentMethod = this.selectedPaymentMethod === method ? '' : method;
  }

  sendData() {
    console.log(this.paymentForm.value)
    this.paymentForm.reset()
    this.toNextPhase()
  }
}
