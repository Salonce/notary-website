import { Component } from '@angular/core';
import { BeforeVisit } from './before-visit/before-visit';
import { Documents } from './documents/documents';

@Component({
  imports: [BeforeVisit, Documents],
  selector: 'app-customer-area',
  styleUrl: './customer-area.css',
  templateUrl: './customer-area.html',
})
export class CustomerArea {}
