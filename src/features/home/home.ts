import { Component } from '@angular/core';
import { Contact } from '../contact/contact';
import { NotarialServices } from '../notarial-services/notarial-services';
import { Fees } from '../fees/fees';
import { CustomerArea } from '../customer-area/customer-area';
import { LatinQuote } from '../latin-quote/latin-quote';
import { GoogleReviews } from '../google-reviews/google-reviews';
import { SectionDivider } from '../../shared/section-divider/section-divider';
import { About } from '../about/about';

@Component({
  imports: [Contact, NotarialServices, Fees, CustomerArea, LatinQuote, LatinQuote, About, GoogleReviews, SectionDivider],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
