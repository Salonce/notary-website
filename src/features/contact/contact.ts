import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { ContactInfo } from './contact-info/contact-info';
import { ContactMap } from './contact-map/contact-map';

@Component({
  imports: [ContactInfo, ContactForm, ContactMap],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {}
