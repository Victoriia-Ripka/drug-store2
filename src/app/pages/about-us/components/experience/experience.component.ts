import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  initialValues: number[] = [0, 0, 0, 0];
  finalValues: number[] = [1, 24, 3, 85];
  intervals: any = [];
  duration = 10000;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '1200px',
      threshold: 0.8 
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startIntervals();
          observer.unobserve(this.elementRef.nativeElement);
        }
      })
    }, options)

    observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.intervals.forEach((interval: any ) => clearInterval(interval));
  }

  startIntervals() {
    this.intervals = this.finalValues.map((targetNumber, index) => {
      const increment = Math.ceil(targetNumber / (this.duration / 50));
      return setInterval(() => {
        this.updateNumbers(index, targetNumber, increment);
      }, 50)
    })
  }

  updateNumbers(index: number, targetNumber: number, increment: number): void {
    if (this.initialValues[index] + increment >= targetNumber) {
      clearInterval(this.intervals[index]);
      this.initialValues[index] = targetNumber;
    } else {
      this.initialValues[index] += increment;
    }
  }
}
