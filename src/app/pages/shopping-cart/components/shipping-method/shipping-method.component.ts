import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shipping-method',
  standalone: true,
  imports: [],
  templateUrl: './shipping-method.component.html',
  styleUrl: './shipping-method.component.scss'
})
export class ShippingMethodComponent {
  @Output()
  nextPhase: EventEmitter<string> = new EventEmitter<string>()

  toNextPhase() {
    this.nextPhase.emit('shipping-method')
  }
}
