import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cart-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss'
})
export class CartModalComponent {
  totalPrice: number = 22.43;

  @Input()
  itemsInCart: any[] | null = null;

  @Output()
  toggleCartModal: EventEmitter<void> = new EventEmitter<void>();

  closeModal() {
    this.toggleCartModal.emit();
  }
}
