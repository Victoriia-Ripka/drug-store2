import { Component } from '@angular/core';
import { GuaranteeComponent, ExperienceComponent } from './components';

@Component({
  selector: 'about-us-page',
  standalone: true,
  imports: [GuaranteeComponent, ExperienceComponent],
  templateUrl: './aboutUsPage.component.html',
})
export class AboutUsPageComponent { }
