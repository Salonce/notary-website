import { Service } from '@angular/core';

@Service()
export class SectionScrollService {
  scrollToSection(id: string): void {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrollToCurrentHash(): void {
    const id = decodeURIComponent(
      window.location.hash.slice(1),
    );

    if (id) {
      this.scrollToSection(id);
    }
  }
}