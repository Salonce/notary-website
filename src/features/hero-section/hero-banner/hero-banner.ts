import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero-banner',
  styleUrl: './hero-banner.css',
  templateUrl: './hero-banner.html',
})
export class HeroBanner {
  readonly bannerParts = [
    'Kancelaria Notarialna',
    'Zbigniew Władysławski',
    'Notariusz',
  ];
  readonly splitText = (text: string): string[] => [...text];
}
