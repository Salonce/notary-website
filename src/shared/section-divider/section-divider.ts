import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-divider',
  styleUrl: './section-divider.css',
  templateUrl: './section-divider.html',
})
export class SectionDivider {
  size = input<'short' | 'long'>('long');
}