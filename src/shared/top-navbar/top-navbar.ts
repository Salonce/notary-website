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

  scrollToSection(event: MouseEvent, id: string): void {
    event.preventDefault();

    this.sectionScroll.scrollToSection(id);

    history.replaceState(null, '', `#${id}`);
  }
}