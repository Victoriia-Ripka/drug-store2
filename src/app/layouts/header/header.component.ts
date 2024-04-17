import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModalComponent, CartModalComponent } from './components';
import { Router } from '@angular/router';

const languages = [
  { value: 'german', currency: "EURO", language: 'DE' },
  { value: 'polish', currency: "PLN", language: 'PL' },
  { value: 'japanese', currency: "JPY", language: 'JAP' },
  { value: 'english', currency: "USD", language: 'ENG' },
];

const itemsInCart = [
  {
    title: 'Provigil',
    price: '0.91',
    src: 'assets/img/mobile/doxycycline-min.png'
  },
  {
    title: 'Amoxil',
    price: '3.91',
    src: 'assets/img/mobile/clomid-min.png'
  },
  {
    title: 'Ampicillin',
    price: '1.80',
    src: 'assets/img/mobile/aurogra-min.png'
  }
]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AccountModalComponent, CartModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languages: Array<any> = languages;
  isMenuOpened: boolean = false;
  isModalOpen: boolean = false;
  isAuthorizated: boolean = true;
  isAccountModal: boolean = false;
  isCartModalOpened: boolean = true;
  selectedLanguage: string = 'ENG';
  selectedCurrency: string = 'USD';
  itemsInCart: any[] | null = itemsInCart;
  userEmail: string = 'user_email@gmail.com'
  isShoppingCartPages: boolean = false;

  constructor(private router: Router) { }

  ngAfterViewChecked() {
    if (this.router.url == '/shopping-cart') {
      this.isShoppingCartPages = true;
    }
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  toggleCartModal() {
    this.isCartModalOpened = !this.isCartModalOpened;
  }

  toggleAccountModal() {
    this.isAccountModal = !this.isAccountModal;
  }

  selectLanguage(language: any): void {
    this.selectedLanguage = language;
  }

  selectCurrency(currency: any): void {
    this.selectedCurrency = currency;
  }


}
