import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  standalone: true
})
export class ProductInfoComponent {
  @Input()
  product: any

  productInstruction: any = productInstruction
  openedSection: "desc" | "reviews" = "desc"

  changeOpenedSection(section: "desc" | "reviews") {
    this.openedSection = section
  }

  toggleInstructionSection(title: string) {
    const section = this.productInstruction.find((section: { title: string; shown: boolean }) => {
      return section.title === title;
    });

    if (section) {
      section.shown = !section.shown; 
      console.log('click');
    }
  }

  reviewForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  get titleControl() {
    return this.reviewForm.get('title') as FormControl;
  }

  get contentControl() {
    return this.reviewForm.get('content') as FormControl;
  }

  sendData() {
    console.log(this.reviewForm.value)
    this.reviewForm.reset()
  }
}

const productInstruction: any = [
  {
    title: 'General',
    shown: true
  },
  {
    title: 'Directions',
    shown: true
  },
  {
    title: 'Precautions',
    shown: true
  },
  {
    title: 'Contraindications',
    shown: true
  },
  {
    title: 'Side-effect',
    shown: true
  },
  {
    title: 'Interaction',
    shown: true
  },
  {
    title: 'Missed',
    shown: true
  },
  {
    title: 'Overdose',
    shown: true
  },
  {
    title: 'Storage',
    shown: true
  },
  {
    title: 'Note',
    shown: true
  },
]