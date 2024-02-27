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

  openedSection: "desc" | "reviews" = "desc"

  changeOpenedSection(section: "desc" | "reviews") {
    this.openedSection = section
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

