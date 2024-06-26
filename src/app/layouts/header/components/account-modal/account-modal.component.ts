import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'account-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-modal.component.html',
  styleUrl: './account-modal.component.scss'
})
export class AccountModalComponent {
  @Input()
  authorizated: boolean = true;

  @Output()
  toggleModal = new EventEmitter();

  closeModel(): void {
    this.toggleModal.emit();
  }

  sign_out() {
    this.authorizated = !this.authorizated;
  }
}
