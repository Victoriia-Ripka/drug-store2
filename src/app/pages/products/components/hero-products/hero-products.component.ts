import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'hero-products',
  standalone: true,
  imports: [],
  templateUrl: './hero-products.component.html',
  styleUrl: './hero-products.component.scss',
  animations: [
    trigger('circles', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open <=> closed', [
        animate('1s ease')
      ])
    ]),
    trigger('text', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open <=> closed', [
        animate('1.5s ease-in')
      ])
    ]),
  ]
})
export class HeroProductsComponent {
  isOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const heroElement = document.getElementById('products-hero');
    const isComponentInViewport = heroElement ? this.isElementInViewport(heroElement) : false;

    setTimeout(() => {
      this.isOpen = isComponentInViewport;
    });
  }

  ngAfterViewInit() {
    this.onWindowScroll();
  }

  private isElementInViewport(el: HTMLElement): boolean {
    if (!el) return false;

    const rect = el.getBoundingClientRect();

    return (
      (rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) ||
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
}
