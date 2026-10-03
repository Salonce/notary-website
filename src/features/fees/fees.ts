import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { TitleDivider } from '../../shared/title-divider/title-divider';


@Component({
  imports: [TitleDivider],
  selector: 'app-fees',
  styleUrl: './fees.css',
  templateUrl: './fees.html',
})
export class Fees implements AfterViewInit, OnDestroy {

  @ViewChild('feesSection')
  feesSection!: ElementRef<HTMLElement>;

  isFeesVisible = false;

  private observer?: IntersectionObserver;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {

    this.observer = new IntersectionObserver(
      ([entry]) => {

        if (!entry.isIntersecting) {
          return;
        }

        this.cdr.detectChanges();

        requestAnimationFrame(() => {

          this.isFeesVisible = true;

          this.cdr.detectChanges();

          this.observer?.disconnect();

        });

      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(
      this.feesSection.nativeElement
    );
  }

  ngOnDestroy(): void {

    this.observer?.disconnect();

  }
}