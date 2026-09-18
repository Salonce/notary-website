import { Component } from '@angular/core';
import { BannerImage } from '../banner-image/banner-image';
import { Contact } from '../contact/contact';
import { Header } from '../header/header';
import { NotarialServices } from '../notarial-services/notarial-services';
import { Fees } from '../fees/fees';
import { CustomerArea } from '../customer-area/customer-area';
import { TopNavbar } from '../../shared/top-navbar/top-navbar';
import { LatinQuote } from '../latin-quote/latin-quote';
import { AboutLocation } from '../about-location/about-location';
import { AboutLawyer } from '../about-lawyer/about-lawyer';
import { ForDisabled } from '../for-disabled/for-disabled';
import { GoogleMap } from '../google-map/google-map';

@Component({
  imports: [BannerImage, Contact, Header, NotarialServices, Fees, CustomerArea, TopNavbar, LatinQuote, LatinQuote, AboutLawyer, AboutLocation, ForDisabled, GoogleMap],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
