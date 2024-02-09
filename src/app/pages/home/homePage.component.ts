import { Component } from '@angular/core'
import { HeroComponent, ProductsComponent, TestimonialsComponent } from './components';

@Component({
    selector: 'home-page',
    standalone: true,
    imports: [ HeroComponent, TestimonialsComponent, ProductsComponent],
    templateUrl: './homePage.component.html',
})
export class HomePageComponent { }