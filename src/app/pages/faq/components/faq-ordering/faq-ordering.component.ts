import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../../../../interfaces/content';

const content: Array<Content> = [
  {
    id: 1,
    question: 'Is your site secure?',
    answer: 'The main reason for the reduced price of generic medicines is that the creation of a generic drug costs significantly less and therefore a lower price can be offered while still maintaining profitability.'
  },
  {
    id: 2,
    question: 'What are the payment methods available?',
    answer: 'The main reason for the reduced price of generic medicines is that the creation of a generic drug costs significantly less and therefore a lower price can be offered while still maintaining profitability.'
  },
  {
    id: 3,
    question: 'Is there a money back guarantee?',
    answer: 'Yes, we offer a money back guarantee if you are not satisfied. Click here to get the information about our refund policy.'
  },
  {
    id: 4,
    question: 'What is the difference between regular pills and pills with "SR, ER, XR, XL, TR, CR" abbreviates?',
    answer: 'What is the difference between Soft and Regular pills? My order was for “soft” tabs but the pills I received are hard!'
  }
]

@Component({
  selector: 'faq-ordering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-ordering.component.html',
  styleUrl: '../../faqPage.component.scss'
})
export class FaqOrderingComponent {
  content: Array<Content> = [];
  selectedQuestion: number | null = 1;

  ngOnInit(): void {
    this.content = content;
  }

  showAnswer(id: number): void {
    this.selectedQuestion = id
  }

  hideAnswer(): void {
    this.selectedQuestion = 0
  }

  isItemSelected(id: number): boolean {
    return this.selectedQuestion === id;
  }
}
