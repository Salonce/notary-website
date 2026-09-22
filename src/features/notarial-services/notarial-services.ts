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

  toggleNieruchomosci(): void {
    this.nieruchomosciOpen = !this.nieruchomosciOpen;
  }

  toggleRodzinne(): void {
    this.rodzinneOpen = !this.rodzinneOpen;
  }

  toggleSpadki(): void {
    this.spadkiOpen = !this.spadkiOpen;
  }
}
