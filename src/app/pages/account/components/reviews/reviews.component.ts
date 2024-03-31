import { Component, Input } from '@angular/core';

@Component({
  selector: 'account-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  @Input()
  userName: string = '';
}
