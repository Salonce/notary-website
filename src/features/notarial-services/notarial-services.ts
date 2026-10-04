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
  selector: 'app-notarial-services',
  standalone: true,
  imports: [TitleDivider],
  templateUrl: './notarial-services.html',
  styleUrl: './notarial-services.css',
})
export class NotarialServices implements AfterViewInit, OnDestroy {

  @ViewChild('servicesSection')
  servicesSection?: ElementRef<HTMLElement>;

  isServicesVisible = false;

  // Stan rozwinięcia kategorii
  showNieruchomosci = false;
  showRodzinne = false;
  showSpadki = false;
  showSpolki = false;
  showPoswiadczenia = false;
  showPozostale = false;

  private observer?: IntersectionObserver;

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    // Bezpieczeństwo — gdyby element nie był dostępny
    if (!this.servicesSection?.nativeElement) {
      return;
    }

    // IntersectionObserver może nie być dostępny w niektórych środowiskach
    if (typeof IntersectionObserver === 'undefined') {
      this.isServicesVisible = true;
      this.cdr.detectChanges();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        this.isServicesVisible = true;

        this.cdr.detectChanges();

        this.observer?.disconnect();
        this.observer = undefined;
      },
      {
        threshold: 0.15,
      }
    );

    this.observer.observe(this.servicesSection.nativeElement);
  }

  toggleCategory(category: string): void {
    // Jeżeli kliknięto już otwartą kategorię — zamknij ją
    switch (category) {

      case 'nieruchomosci':
        this.showNieruchomosci = !this.showNieruchomosci;
        this.showRodzinne = false;
        this.showSpadki = false;
        this.showSpolki = false;
        this.showPoswiadczenia = false;
        this.showPozostale = false;
        break;

      case 'rodzinne':
        this.showRodzinne = !this.showRodzinne;
        this.showNieruchomosci = false;
        this.showSpadki = false;
        this.showSpolki = false;
        this.showPoswiadczenia = false;
        this.showPozostale = false;
        break;

      case 'spadki':
        this.showSpadki = !this.showSpadki;
        this.showNieruchomosci = false;
        this.showRodzinne = false;
        this.showSpolki = false;
        this.showPoswiadczenia = false;
        this.showPozostale = false;
        break;

      case 'spolki':
        this.showSpolki = !this.showSpolki;
        this.showNieruchomosci = false;
        this.showRodzinne = false;
        this.showSpadki = false;
        this.showPoswiadczenia = false;
        this.showPozostale = false;
        break;

      case 'poswiadczenia':
        this.showPoswiadczenia = !this.showPoswiadczenia;
        this.showNieruchomosci = false;
        this.showRodzinne = false;
        this.showSpadki = false;
        this.showSpolki = false;
        this.showPozostale = false;
        break;

      case 'pozostale':
        this.showPozostale = !this.showPozostale;
        this.showNieruchomosci = false;
        this.showRodzinne = false;
        this.showSpadki = false;
        this.showSpolki = false;
        this.showPoswiadczenia = false;
        break;

      default:
        break;
    }

    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}