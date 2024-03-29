import { Component } from '@angular/core';

@Component({
  selector: 'account-page',
  templateUrl: './accountPage.component.html',
  styleUrl: './accountPage.component.scss'
})
export class AccountPageComponent {
  userEmail: string = 'usermail@gmail.com';
  userName: string = 'User Name';
  selectedSection: 'dashboard' | 'info' | 'orders' | 'methods' | 'reviews' = 'dashboard';

  // selectSection(section: 'dashboard' | 'info' | 'orders' | 'methods' | 'reviews'): void {
  //   this.selectedSection = section;
  //   this.router.navigate(['/account', section]); 
  // }
}
