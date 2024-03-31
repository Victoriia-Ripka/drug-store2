import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'contact-us-page',
  templateUrl: './contactUsPage.component.html',
  styleUrl: './contactUsPage.component.scss'
})
export class ContactUsPageComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    services: new FormControl(''),
    message: new FormControl('', Validators.required),
  });

  get nameControl() {
    return this.contactForm.get('name') as FormControl;
  }

  get emailControl() {
    return this.contactForm.get('email') as FormControl;
  }

  get servicesControl() {
    return this.contactForm.get('services') as FormControl;
  }

  get messageControl() {
    return this.contactForm.get('message') as FormControl;
  }

  sendData() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
