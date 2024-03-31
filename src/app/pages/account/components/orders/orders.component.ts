import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'account-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  imports: [ ReactiveFormsModule, CommonModule ],
  standalone: true
})
export class OrdersComponent {
  orders: any = [];

  orderForm = new FormGroup({
    number: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    orders: new FormControl('', Validators.required),
  });

  get numberControl() {
    return this.orderForm.get('number') as FormControl;
  }

  get timeControl() {
    return this.orderForm.get('time') as FormControl;
  }

  get ordersControl() {
    return this.orderForm.get('orders') as FormControl;
  }

  sendData() {
    console.log(this.orderForm.value);
    this.orderForm.reset();
  }
}
