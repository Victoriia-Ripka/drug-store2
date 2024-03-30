import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

const languages: any[] = [
  { value: 'English (United States)', language: 'English (United States)' },
  { value: 'English (Canadian)', language: 'English (Canadian)' },
  // { value: 'japanese', language: 'JAP' },
  // { value: 'english', language: 'ENG' },
];

@Component({
  selector: 'authorization',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './authorizationPage.component.html',
  styleUrl: './authorizationPage.component.scss'
})
export class AuthorizationPageComponent {
  languages: any[] = languages;
  selectedLanguage: string = 'English (United States)';
  hidePassword: boolean = true

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.loginForm.get('password') as FormControl;
  }

  sendData() {
    console.log("click")
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.loginForm.reset()
    }
  }

  selectLanguage(language: any): void {
    this.selectedLanguage = language;
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword
  }
}
