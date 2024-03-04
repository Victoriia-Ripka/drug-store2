import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModalComponent } from './components';

const languages = [
  { value: 'german', currency: "EURO", language: 'DE' },
  { value: 'polish', currency: "PLN", language: 'PL' },
  { value: 'japanese', currency: "JPY", language: 'JAP' },
  { value: 'english', currency: "USD", language: 'ENG' },
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AccountModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languages: Array<any> = languages
  isMenuOpened: boolean = false;
  isModalOpen: boolean = false;
  selectedLanguage: string = 'ENG';
  selectedCurrency: string = 'USD';

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen
  }

  selectLanguage(language: any): void {
    this.selectedLanguage = language;
  }

  selectCurrency(currency: any): void {
    this.selectedCurrency = currency;
  }


}
