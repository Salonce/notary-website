
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { TitleDivider } from '../../../shared/title-divider/title-divider';

@Component({
  imports: [TitleDivider],
  selector: 'app-office-location',
  styleUrl: './office-location.css',
  templateUrl: './office-location.html',
})
export class OfficeLocation implements AfterViewInit, OnDestroy {

  @ViewChild('locationSection')
  locationSection!: ElementRef<HTMLElement>;

  isLocationVisible = false;

  private observer?: IntersectionObserver;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    // Kod uruchamiany wyłącznie w przeglądarce
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        // Najpierw Angular musi wyrenderować stan początkowy
        this.cdr.detectChanges();

        // Dopiero w następnej klatce uruchamiamy animację
        requestAnimationFrame(() => {
          this.isLocationVisible = true;
          this.cdr.detectChanges();

          this.observer?.disconnect();
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.locationSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
