import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100vw'
                }),
                animateChild()
            ], { optional: true }),
            query(':enter', [
                style({ left: '-100%' })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('400ms ease', style({ left: '100%', opacity: 0 }))
                ], { optional: true }),
                query(':enter', [
                    animate('400ms ease', style({ left: '0%' }))
                ], { optional: true }),
                query(':enter', animateChild(), { optional: true })
            ]),
        ])
    ]);