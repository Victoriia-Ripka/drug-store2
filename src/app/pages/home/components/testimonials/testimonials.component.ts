import { Component } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

const swiperParams: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 60,
  direction: 'vertical',
  enabled: false,
  loop: false,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1600: {
      spaceBetween: 42,
      enabled: true,
      centeredSlides: true,
      loop: true,
      direction: 'horizontal',
    }
  }
};

@Component({
  selector: 'testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  mySwiper: Swiper | undefined;
  slidesQuantity: number = 3;
  currentPage: number = 1;
  slidesAmount = 5;

  ngAfterViewInit() {
    this.mySwiper = new Swiper('#reviewsSwiper', swiperParams);
  }

  ngOnChanges() {
    if (this.slidesQuantity) {
      this.slidesQuantity = Math.max(1, this.slidesQuantity);
    }
  }

  nextSlide() {
    if (this.mySwiper) {
      this.mySwiper.slideNext();
      if (this.currentPage == this.slidesAmount) {
        this.currentPage = 1;
      } else {
        this.currentPage += 1;
      }
    }
  }

  prevSlide() {
    if (this.mySwiper) {
      this.mySwiper.slidePrev();
      if (this.currentPage == 1) {
        this.currentPage = this.slidesAmount;
      } else {
        this.currentPage -= 1;
      }
    }
  }

}
