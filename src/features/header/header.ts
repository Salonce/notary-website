import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  readonly bannerParts = [
    'Kancelaria Notarialna',
    'Zbigniew Władysławski',
    'Notariusz',
  ];

  readonly splitText = (text: string): string[] => [...text];
}