import { Component } from '@angular/core';
import { BannerImage } from '../banner-image/banner-image';
import { Contact } from '../contact/contact';
import { Header } from '../header/header';
import { NotarialServices } from '../notarial-services/notarial-services';
import { Fees } from '../fees/fees';
import { CustomerArea } from '../customer-area/customer-area';
import { TopNavbar } from '../../shared/top-navbar/top-navbar';
import { LatinQuote } from '../latin-quote/latin-quote';
import { Intro } from '../intro/intro';

@Component({
  imports: [BannerImage, Contact, Header, NotarialServices, Fees, CustomerArea, TopNavbar, LatinQuote, LatinQuote, Intro],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
