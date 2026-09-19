import { Component } from '@angular/core';
import { BeforeVisit } from './before-visit/before-visit';
import { Documents } from './documents/documents';
import { ExternalLinks } from './external-links/external-links';

@Component({
  imports: [BeforeVisit, Documents, ExternalLinks],
  selector: 'app-customer-area',
  styleUrl: './customer-area.css',
  templateUrl: './customer-area.html',
})
export class CustomerArea {}
