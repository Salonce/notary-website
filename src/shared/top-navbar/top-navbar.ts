
import { Component, inject } from '@angular/core';
import { SectionScrollService } from '../section-scroll-service/section-scroll-service';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  templateUrl: './top-navbar.html',
  styleUrl: './top-navbar.css',
})
export class TopNavbar {
  private readonly sectionScroll = inject(SectionScrollService);

  isMobileMenuOpen = false;

  /**
   * Otwiera lub zamyka menu mobilne.
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Zamyka menu mobilne.
   */
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  /**
   * Obsługuje nawigację do wskazanej sekcji strony.
   */
  scrollToSection(
    event: MouseEvent,
    id: string,
    closeMobileMenu = false
  ): void {
    event.preventDefault();

    if (closeMobileMenu) {
      this.closeMobileMenu();

      // Poczekaj na aktualizację widoku i zamknięcie menu.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.navigateToSection(id);
        });
      });

      return;
    }

    this.navigateToSection(id);
  }

  /**
   * Wykonuje przewijanie i aktualizuje adres URL.
   */
  private navigateToSection(id: string): void {
    this.sectionScroll.scrollToSection(id);

    history.replaceState(null, '', `#${id}`);
  }
}

