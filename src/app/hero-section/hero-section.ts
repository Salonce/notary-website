import { Component } from '@angular/core';
import { HeroBanner } from './hero-banner/hero-banner';
import { HeroImage } from './hero-image/hero-image';

@Component({
  imports: [HeroBanner, HeroImage],
  selector: 'app-hero-section',
  styleUrl: './hero-section.css',
  templateUrl: './hero-section.html',
})
export class HeroSection {


}
