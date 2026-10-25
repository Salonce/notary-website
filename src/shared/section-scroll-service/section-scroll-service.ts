
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionScrollService {
  scrollToSection(id: string): void {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const scrollMarginTop = parseFloat(
      getComputedStyle(target).scrollMarginTop
    ) || 0;

    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      scrollMarginTop;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }

  scrollToCurrentHash(): void {
    const id = decodeURIComponent(
      window.location.hash.slice(1)
    );

    if (id) {
      this.scrollToSection(id);
    }
  }
}
