import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

const swiperParams: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 13,
  direction: 'vertical',
  enabled: false,
  loop: false,
  allowTouchMove: false,
  pagination: {
    el: '.custom-pagination',
    renderCustom: (_, current, total) => {
      return current + ' of ' + total;
    }
  },
  navigation: {
    nextEl: '.swiper-button-next'
  },
  breakpoints: {
    1600: {
      spaceBetween: 16,
      enabled: true,
      loop: true,
      direction: 'horizontal',
    }
  }
};

@Component({
  selector: 'shopping-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss', '../../shoppingCartPage.component.scss']
})
export class ShoppingCartComponent {
  mySwiper: Swiper | undefined;
  currentPage: number = 1;
  slidesQuantity: number = 3;
  slidesAmount = 4;

  totalItems: number = 1;
  totalItemsPrice: number = 26.67;
  discountPrice: number = 3.95;
  subtotalPrice: number = 23.33;
  deliveryPrice: number = 23.33;
  vatPrice: number = 4;
  totalPrice: number = this.totalItemsPrice - this.discountPrice + this.deliveryPrice;
  deliveryFirm: string = 'venipak';
  toFreeDelivery: number = 60 - this.totalItemsPrice;

  @Output()
  nextPhase: EventEmitter<string> = new EventEmitter<string>();

  ngAfterViewInit() {
    this.mySwiper = new Swiper('#deliverySwiper', swiperParams);
  }

  ngOnChanges() {
    if (this.slidesQuantity) {
      this.slidesQuantity = Math.max(1, this.slidesQuantity);
    }
  }

  nextSlide() {
    if (this.mySwiper) {
      this.mySwiper.slideNext();
      this.currentPage = this.currentPage < this.slidesAmount ? this.currentPage + 1 : this.currentPage;
        
        
      // } else {
      //   this.currentPage += 1;
      // }

      // } else {
      //   this.currentPage += 1;
      // }
    }
  }

  toNextPhase() {
    this.nextPhase.emit('shipping-info');
  }

  changedeliveryFirm(firm: string) {
    this.deliveryFirm = firm;
  }
}
