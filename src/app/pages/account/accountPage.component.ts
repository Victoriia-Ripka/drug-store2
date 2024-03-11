import { Component } from '@angular/core';
import { ReviewsComponent, PersonalInfoComponent, PaymentMethodsComponent, OrdersComponent, DashboardComponent } from './components';

@Component({
  selector: 'account-page',
  standalone: true,
  imports: [ReviewsComponent, PersonalInfoComponent, PaymentMethodsComponent, OrdersComponent, DashboardComponent],
  templateUrl: './accountPage.component.html',
  styleUrl: './accountPage.component.scss'
})
export class AccountPageComponent {
  userEmail: string = 'usermail@gmail.com';
  selectedSection: 'dashboard' | 'info' | 'orders' | 'methods' | 'reviews' = 'dashboard'

  selectSection(section: 'dashboard' | 'info' | 'orders' | 'methods' | 'reviews'): void{
    this.selectedSection = section
  }
}
