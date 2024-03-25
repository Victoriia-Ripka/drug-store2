import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'shipping-info',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.scss', '../../shoppingCartPage.component.scss']
})
export class ShippingInfoComponent {
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
    this.nextPhase.emit('shipping-method')
  }

  shippingForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  get nameControl() {
    return this.shippingForm.get('name') as FormControl;
  }

  get lastNameControl() {
    return this.shippingForm.get('lastName') as FormControl;
  }

  get countryControl() {
    return this.shippingForm.get('country') as FormControl;
  }

  get addressControl() {
    return this.shippingForm.get('address') as FormControl;
  }

  get cityControl() {
    return this.shippingForm.get('city') as FormControl;
  }

  get postalCodeControl() {
    return this.shippingForm.get('postalCode') as FormControl;
  }

  get phoneControl() {
    return this.shippingForm.get('phone') as FormControl;
  }

  sendData() {
    console.log(this.shippingForm.value)
    this.shippingForm.reset()
    this.toNextPhase()
  }
}
