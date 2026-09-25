import { Component } from '@angular/core';
import { Contact } from '../contact/contact';
import { NotarialServices } from '../notarial-services/notarial-services';
import { Fees } from '../fees/fees';
import { CustomerArea } from '../customer-area/customer-area';
import { LatinQuote } from '../latin-quote/latin-quote';
import { AboutLawyer } from '../about-lawyer/about-lawyer';
import { GoogleMap } from '../google-map/google-map';
import { SectionDivider } from '../../shared/section-divider/section-divider';
import { GoogleReviews } from '../google-reviews/google-reviews';

@Component({
  imports: [Contact, NotarialServices, Fees, CustomerArea, LatinQuote, LatinQuote, AboutLawyer, GoogleMap, GoogleReviews, SectionDivider],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
