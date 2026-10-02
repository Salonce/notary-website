import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { SectionDivider } from '../../shared/section-divider/section-divider';

@Component({
  imports: [SectionDivider],
  selector: 'app-about-lawyer',
  styleUrl: './about-lawyer.css',
  templateUrl: './about-lawyer.html',
})
export class AboutLawyer implements AfterViewInit, OnDestroy {

  @ViewChild('notariuszSection')
  notariuszSection!: ElementRef<HTMLElement>;

  isNotariuszVisible = false;

  private observer?: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        // Angular renderuje początkowy stan animacji
        this.cdr.detectChanges();

        // Animacja rozpoczyna się dopiero w kolejnej klatce
        requestAnimationFrame(() => {
          this.isNotariuszVisible = true;
          this.cdr.detectChanges();

          this.observer?.disconnect();
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.notariuszSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}