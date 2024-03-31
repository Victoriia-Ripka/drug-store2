import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'account-page',
  templateUrl: './accountPage.component.html',
  styleUrl: './accountPage.component.scss'
})
export class AccountPageComponent {
  userEmail: string = 'usermail@gmail.com';
  userName: string = 'User Name';
  selectedSection: string = 'dashboard';

  constructor(private router: Router) {
    this.selectedSection = this.router.url.slice(9);
  }
}
