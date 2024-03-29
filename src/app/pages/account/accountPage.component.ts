import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent, PersonalInfoComponent, PaymentMethodsComponent, OrdersComponent, DashboardComponent } from './components';

@Component({
  selector: 'account-page',
  standalone: true,
  imports: [CommonModule, ReviewsComponent, PersonalInfoComponent, PaymentMethodsComponent, OrdersComponent, DashboardComponent],
  templateUrl: './accountPage.component.html',
  styleUrl: './accountPage.component.scss'
})
export class AccountPageComponent {
  userEmail: string = 'usermail@gmail.com';
  userName: string = 'User Name'
  selectedSection: 'dashboard' | 'info' | 'orders' | 'methods' | 'reviews' = 'dashboard'

  selectSection(section: 'dashboard' | 'info' | 'orders' | 'methods' | 'reviews'): void{
    this.selectedSection = section
  }
}
