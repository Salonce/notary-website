import { Component } from '@angular/core';
import { Contact } from '../contact/contact';
import { NotarialServices } from '../notarial-services/notarial-services';
import { Fees } from '../fees/fees';
import { CustomerArea } from '../customer-area/customer-area';
import { TopNavbar } from '../../shared/top-navbar/top-navbar';
import { LatinQuote } from '../latin-quote/latin-quote';
import { AboutLawyer } from '../about-lawyer/about-lawyer';
import { GoogleMap } from '../google-map/google-map';
import { GoogleOpinions } from '../google-opinions/google-opinions';
import { ForDisabled } from '../for-disabled/for-disabled';
import { SectionDivider } from '../../shared/section-divider/section-divider';

@Component({
  imports: [Contact, ForDisabled, NotarialServices, Fees, CustomerArea, TopNavbar, LatinQuote, LatinQuote, AboutLawyer, GoogleMap, GoogleOpinions, SectionDivider],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
