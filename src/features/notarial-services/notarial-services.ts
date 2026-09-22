import { Component } from '@angular/core';

@Component({
imports: [],
selector: 'app-notarial-services',
styleUrl: './notarial-services.css',
templateUrl: './notarial-services.html',
})
export class NotarialServices {
  nieruchomosciOpen = false;
  rodzinneOpen = false;
  spadkiOpen = false;
  spolkiOpen = false;
  poswiadczeniaOpen = false;
  pozostaleOpen = false;

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
