
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

  scrollToSection(
    event: MouseEvent,
    id: string,
    closeMobileMenu = false
  ): void {
    event.preventDefault();

    if (closeMobileMenu) {
      // Close the menu before calculating the target's scroll position.
      this.isMobileMenuOpen = false;

      // Wait for the layout to update before scrolling.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.navigateToSection(id);
        });
      });

      return;
    }

    // Desktop navigation uses the same scrolling service.
    this.navigateToSection(id);
  }

  private navigateToSection(id: string): void {
    this.sectionScroll.scrollToSection(id);

    // Update the URL without triggering native anchor navigation.
    history.replaceState(null, '', `#${id}`);
  }
}
