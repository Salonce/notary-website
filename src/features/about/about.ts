import { Component } from '@angular/core';
import { AboutLawyer } from './about-lawyer/about-lawyer';
import { OfficeLocation } from './office-location/office-location';

@Component({
  imports: [AboutLawyer, OfficeLocation],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {}
