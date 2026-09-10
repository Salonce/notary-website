import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-top-navbar',
  styleUrl: './top-navbar.css',
  templateUrl: './top-navbar.html',
})
export class TopNavbar {
}
