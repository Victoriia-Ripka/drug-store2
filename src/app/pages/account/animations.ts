import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ngx-animate';

export const slideInAnimation = trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])