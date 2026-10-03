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

  nieruchomosciOpen = false;
  rodzinneOpen = false;
  spadkiOpen = false;
  spolkiOpen = false;
  poswiadczeniaOpen = false;
  pozostaleOpen = false;

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

  toggleNieruchomosci(): void {
    this.nieruchomosciOpen = !this.nieruchomosciOpen;
  }

  toggleRodzinne(): void {
    this.rodzinneOpen = !this.rodzinneOpen;
  }

  toggleSpadki(): void {
    this.spadkiOpen = !this.spadkiOpen;
  }

  toggleSpolki(): void {
    this.spolkiOpen = !this.spolkiOpen;
  }

  togglePoswiadczenia(): void {
    this.poswiadczeniaOpen = !this.poswiadczeniaOpen;
  }

  togglePozostale(): void {
    this.pozostaleOpen = !this.pozostaleOpen;
  }
}