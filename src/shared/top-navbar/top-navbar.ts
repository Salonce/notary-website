import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  templateUrl: './top-navbar.html',
  styleUrl: './top-navbar.css',
})
export class TopNavbar {

  scrollToSection(
    event: MouseEvent,
    id: string
  ): void {

    event.preventDefault();

    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    history.replaceState(
      null,
      '',
      `#${id}`
    );
  }
}