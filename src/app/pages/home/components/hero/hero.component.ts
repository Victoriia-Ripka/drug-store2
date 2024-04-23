import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('hero', [
      state('open', style({
        height: '100%',
        transform: 'scale(1.0)'
      })),
      state('closed', style({
        height: 0,
        transform: 'scale(0.0)'
      })),
      transition('open <=> closed', [
        animate('1s ease')
      ])
    ]),
    trigger('images', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open <=> closed', [
        animate('0.5s ease-in-out')
      ])
    ]),
    trigger('circles', [
      state('open', style({
        transform: 'scale(1.0)'
      })),
      state('closed', style({
        transform: 'scale(0.0)'
      })),
      transition('open <=> closed', [
        animate('1.5s ease')
      ])
    ]),
  ]
})
export class HeroComponent {
  isOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const heroElement = document.getElementById('hero-component');
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
