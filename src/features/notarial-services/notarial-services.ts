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
  selector: 'app-notarial-services',
  styleUrl: './notarial-services.css',
  templateUrl: './notarial-services.html',
})
export class NotarialServices implements AfterViewInit, OnDestroy {

  @ViewChild('servicesSection')
  servicesSection!: ElementRef<HTMLElement>;

  isServicesVisible = false;

  private observer?: IntersectionObserver;

  // Dokładne nazwy zmiennych pasujące do Twojego HTML
  showNieruchomosci = false;
  showRodzinne = false;
  showSpadki = false;
  showSpolki = false;
  showPoswiadczenia = false;
  showPozostale = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.cdr.detectChanges();

        requestAnimationFrame(() => {
          this.isServicesVisible = true;
          this.cdr.detectChanges();

          this.observer?.disconnect();
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.servicesSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}