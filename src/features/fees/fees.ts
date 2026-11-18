
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

import { TitleDivider } from '../../shared/title-divider/title-divider';
import { SectionScrollService } from '../../shared/section-scroll-service/section-scroll-service';

@Component({
  selector: 'app-fees',
  imports: [TitleDivider],
  styleUrl: './fees.css',
  templateUrl: './fees.html',
})
export class Fees implements AfterViewInit, OnDestroy {

  @ViewChild('feesSection')
  feesSection!: ElementRef<HTMLElement>;

  isFeesVisible = false;

  private observer?: IntersectionObserver;

  constructor(
    private cdr: ChangeDetectorRef,
    private sectionScrollService: SectionScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.isFeesVisible = true;
        this.cdr.detectChanges();

        this.observer?.disconnect();
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.feesSection.nativeElement);
  }

  scrollToPayment(event: Event): void {
    event.preventDefault();

    // Update the URL hash without reloading the page.
    history.pushState(
      null,
      '',
      `${location.pathname}${location.search}#platnosc`
    );

    // Use the same scrolling service as the navbar.
    this.sectionScrollService.scrollToSection('platnosc');
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
