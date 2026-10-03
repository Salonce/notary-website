import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { ContactInfo } from './contact-info/contact-info';
import { TitleDivider } from '../../shared/title-divider/title-divider';

@Component({
  imports: [ContactInfo, ContactForm, TitleDivider],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {}
