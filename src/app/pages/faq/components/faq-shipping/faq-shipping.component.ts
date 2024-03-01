import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../../../../interfaces/content';

const content: Array<Content> = [
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
    answer: 'Please see the table below for answers:'
  },
  {
    id: 4,
    question: 'Where are the pills you offer shipped from?',
    answer: 'How do you ship orders? Will I have to sign for the package?'
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
  content: Array<Content> = [];
  selectedQuestion: number | null = 1;

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
