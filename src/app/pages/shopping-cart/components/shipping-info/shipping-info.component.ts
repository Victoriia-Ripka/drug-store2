import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shipping-info',
  standalone: true,
  imports: [],
  templateUrl: './shipping-info.component.html',
  styleUrl: './shipping-info.component.scss'
})
export class ShippingInfoComponent {
  @Output()
  nextPhase: EventEmitter<string> = new EventEmitter<string>()

  toNextPhase() {
    this.nextPhase.emit('completed')
  }
}
