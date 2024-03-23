import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shipping-info',
  standalone: true,
  imports: [],
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.scss', '../../shoppingCartPage.component.scss']
})
export class ShippingInfoComponent {
  @Output()
  nextPhase: EventEmitter<string> = new EventEmitter<string>()

  toNextPhase() {
    this.nextPhase.emit('completed')
  }
}
