import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../../../../interfaces/content';

const content: Array<Content> = [
  {
    id: 1,
    question: 'What is a generic medication?',
    answer: 'The main reason for the reduced price of generic medicines is that the creation of a generic drug costs significantly less and therefore a lower price can be offered while still maintaining profitability.'
  },
  {
    id: 2,
    question: 'Does a generic medication differ from a brand name drug?',
    answer: 'The main reason for the reduced price of generic medicines is that the creation of a generic drug costs significantly less and therefore a lower price can be offered while still maintaining profitability.'
  },
  {
    id: 3,
    question: 'Why are generic pills cheaper than the brand name ones?',
    answer: 'The main reason for the reduced price of generic medicines is that the creation of a generic drug costs significantly less and therefore a lower price can be offered while still maintaining profitability. Manufacturers of generic drugs are mainly able to avoid the following three costs that brand name pharmaceutical companies incur: (1) costs associated with the research and development of the drug; (2) costs associated with obtaining regulatory approval(i.e.proving safety and efficiency of a drug); and(3) marketing costs. First, Generic manufacturers do not incur the cost of drug discovery and instead reverse - engineer existing brand name drugs to allow them to manufacture bioequivalent versions. Second, generic manufacturers do not bear the burden of proving the safety and efficiency of the drugs through clinical trials - rather, generic manufacturers must prove the generic drug’s bioequivalancy to the existing drug. Third, these companies receive the large benefit of the marketing and advertising that goes into the promotion of the original branded drug.The brand name drug has to prove itself for the consumers, generic ones do not.The drugs that generic manufacturers sell have already been on the market for at least a decade or more and do not need additional advertising.For the same reason, generic manufacturers very rarely give away free samples to promote their products.The significant research, development and marketing costs incurred by the large pharmaceutical companies during the introduction of a new drug to the market is often cited as the reason for the high cost of new medications - they have to pay off these costs and make a profit before the patent expires.Generic manufacturers do not incur these costs, with bioequivalence testing and manufacturing costs significantly lower, thus being able to charge significantly less for generic medication compared to the costs of branded ones.'
  },
  {
    id: 4,
    question: 'Where are the pills you offer shipped from?',
    answer: 'What is the difference between Soft and Regular pills? My order was for “soft” tabs but the pills I received are hard!'
  },
  {
    id: 5,
    question: 'Are your pills FDA approved?',
    answer: 'What is the difference between Soft and Regular pills? My order was for “soft” tabs but the pills I received are hard!'
  },
  {
    id: 6,
    question: 'Prescription',
    answer: 'What is the difference between Soft and Regular pills? My order was for “soft” tabs but the pills I received are hard!'
  },
  {
    id: 7,
    question: 'What is the difference between Soft and Regular pills? My order was for “soft” tabs but the pills I received are hard!',
    answer: 'What is the difference between Soft and Regular pills? My order was for “soft” tabs but the pills I received are hard!'
  },
  {
    id: 8,
    question: 'What is the difference between Soft and Regular pills? My order was for “soft” tabs but the pills I received are hard!',
    answer: 'What is the difference between Soft and Regular pills? My order was for “soft” tabs but the pills I received are hard!'
  },
]

@Component({
  selector: 'faq-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-products.component.html',
  styleUrl: '../../faqPage.component.scss'
})
export class FaqProductsComponent {
  content: Array<Content> = [];
  selectedQuestion: number | null = 1;

  ngOnInit(): void {
    this.content = content;
  }

  toggleAnswer(id: number): void {
    if (id === this.selectedQuestion) {
      this.selectedQuestion = 0;
    }
    else {
      this.selectedQuestion = id;
    }
  }

  isItemSelected(id: number): boolean {
    return this.selectedQuestion === id;
  }
}
