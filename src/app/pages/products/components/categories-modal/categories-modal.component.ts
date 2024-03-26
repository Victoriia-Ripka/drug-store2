import { Component, EventEmitter, Input, Output } from '@angular/core';
import { categoriesList } from '../../../../data/categoriesList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'categories-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-modal.component.html',
  styleUrl: './categories-modal.component.scss'
})
export class CategoriesModalComponent {
  categories = categoriesList;

  @Input()
  selectedCategory: string | undefined = 'Anti Acidity';

  @Output()
  close: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  selectCategoryInModal: EventEmitter<string> = new EventEmitter<string>();

  closeModal() {
    this.close.emit();
  }

  selectCategory(category: string) {
    this.selectCategoryInModal.emit(category);
    this.closeModal();
  }
}
