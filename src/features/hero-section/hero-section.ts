import { Component } from '@angular/core';
 
@Component({
  imports: [],
  selector: 'app-hero-section',
  styleUrl: './hero-section.css',
  templateUrl: './hero-section.html',
})
export class HeroSection {
  readonly bannerParts = [
    'Kancelaria Notarialna',
    'Zbigniew Władysławski',
    'Notariusz',
  ];
 
  readonly imageSrc = 'assets/biurowiec1.jpg';
}
 