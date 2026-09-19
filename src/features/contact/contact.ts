import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { ContactInfo } from './contact-info/contact-info';

@Component({
  imports: [ContactInfo, ContactForm],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {}
