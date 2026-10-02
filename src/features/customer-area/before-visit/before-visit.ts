import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { SectionDivider } from '../../../shared/section-divider/section-divider';

@Component({
  imports: [SectionDivider],
  selector: 'app-before-visit',
  styleUrl: './before-visit.css',
  templateUrl: './before-visit.html',
})
export class BeforeVisit implements AfterViewInit, OnDestroy {

  @ViewChild('beforeVisitSection')
  beforeVisitSection!: ElementRef<HTMLElement>;

  isBeforeVisitVisible = false;

  private observer?: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.cdr.detectChanges();

        requestAnimationFrame(() => {
          this.isBeforeVisitVisible = true;
          this.cdr.detectChanges();

          this.observer?.disconnect();
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.beforeVisitSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}