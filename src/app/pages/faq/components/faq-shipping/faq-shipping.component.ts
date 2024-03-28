import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../../../../interfaces/content';

const content: Content[] = [
  {
    id: 1,
    question: 'Where do the pills come from?',
    answer: 'The main reason for the reduced price of generic medicines is that the creation of a generic drug costs significantly less and therefore a lower price can be offered while still maintaining profitability.'
  },
  {
    id: 2,
    question: 'What shipping methods are available?',
    answer: 'The main reason for the reduced price of generic medicines is that the creation of a generic drug costs significantly less and therefore a lower price can be offered while still maintaining profitability.'
  },
  {
    id: 3,
    question: 'What countries do you ship orders to? What are the shipping costs? How long does the delivery take?',
    answer: 'Please see the table below for answers:',
    table: true
  },
  {
    id: 4,
    question: 'Where are the pills you offer shipped from?',
    answer: 'How do you ship orders? Will I have to sign for the package?'
  }
]

const tableContent: any[] = [
  {
    id: 1,
    question: 'How long does the delivery take?',
    courier: '7-9 working days',
    mail: '14-21 week days'
  },
  {
    id: 2,
    question: 'What are the shipping costs?',
    courier: '$29.95 per package',
    mail: '$9.95'
  },
  {
    id: 3,
    question: 'What countries do you ship orders to?',
    courier: ['Sweden', 'Finland', 'Austria', 'Belgium'],
    mail: 'The orders are shipped worldwide'
  }
]

@Component({
  selector: 'faq-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-shipping.component.html',
  styleUrl: '../../faqPage.component.scss'
})
export class FaqShippingComponent {
  content: Content[] = [];
  selectedQuestion: number | null = 1;
  tableContent: any[] = tableContent

  ngOnInit(): void {
    this.content = content;
  }

  toggleAnswer(id: number): void {
    if (id === this.selectedQuestion) {
      this.selectedQuestion = 0
    }
    else {
      this.selectedQuestion = id
    }
  }

  isItemSelected(id: number): boolean {
    return this.selectedQuestion === id;
  }
}
