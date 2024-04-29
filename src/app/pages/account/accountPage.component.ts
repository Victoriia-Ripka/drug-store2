import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'account-page',
  templateUrl: './accountPage.component.html',
  styleUrl: './accountPage.component.scss',
  animations: [slideInAnimation]
})
export class AccountPageComponent {
  userEmail: string = 'usermail@gmail.com';
  userName: string = 'User Name';
  selectedSection: string = 'dashboard';

  constructor(private router: Router) {
    this.selectedSection = this.router.url.slice(9);
  }
}
