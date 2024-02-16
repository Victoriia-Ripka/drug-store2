export function scrollToSection(id: string, offset: number = 0): void {
    const element = document.getElementById(id);
    if(element) {
        window.scrollTo({
            top: element.offsetTop + offset,
            behavior: 'smooth'
        });
    }
}









// import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// import { takeUntil } from 'rxjs/operators';
// import { Subject } from 'rxjs';

// import { scrollToSection } from '../../functions/scrollToFragment';

// private destroy$ = new Subject<void>()

// constructor(private router: Router, private route: ActivatedRoute) {
//     this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
//         if (event instanceof NavigationEnd) {
//             const urlTree = this.router.parseUrl(event.url)
//             const fragment = urlTree.fragment || ''
//             this.handleNavigationEnd(event.url, fragment)
//         }
//     });
// }

// ngOnDestroy() {
//     this.destroy$.next()
//     this.destroy$.complete()
// }

// navigateToTestimonials() {
//     this.router.navigate([''], { fragment: 'testimonials' })
// }

//   private handleNavigationEnd(url: string, fragment: string) {
//     if (fragment) {
//         scrollToSection(fragment)
//     }
// }