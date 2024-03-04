import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'account-modal',
  standalone: true,
  imports: [],
  templateUrl: './account-modal.component.html',
  styleUrl: './account-modal.component.scss'
})
export class AccountModalComponent {
  @Input()
  authorizated: boolean = true;

  @Output()
  toggleModal: EventEmitter<void> = new EventEmitter<void>()

  closeModel(): void {
    this.toggleModal.emit()
  }
}
