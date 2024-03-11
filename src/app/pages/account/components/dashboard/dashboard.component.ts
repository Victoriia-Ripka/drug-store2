import { Component, Input } from '@angular/core';

@Component({
  selector: 'account-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @Input()
  userEmail: string = ''
}
