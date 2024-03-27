import { Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

const swiperParams: SwiperOptions = {
  slidesPerView: 2,
  spaceBetween: 60,
  direction: 'horizontal',
  loop: true,
  loopAddBlankSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 60,
    }
  }
};

@Component({
  selector: 'account-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  mySwiper: Swiper | undefined;
  slidesQuantity: number = 8;

  @Input()
  userEmail: string = '';

  ngAfterViewInit() {
    this.mySwiper = new Swiper('#recomendationSwiper', swiperParams);
  }

  ngOnChanges() {
    if (this.slidesQuantity) {
      this.slidesQuantity = Math.max(1, this.slidesQuantity);
    }
  }

  nextSlide() {
    if (this.mySwiper) {
      this.mySwiper.slideNext();
    }
  }

  prevSlide() {
    if (this.mySwiper) {
      this.mySwiper.slidePrev();
    }
  }

}
