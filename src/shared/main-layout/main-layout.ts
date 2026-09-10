import { Component } from '@angular/core';
import { TopNavbar } from '../top-navbar/top-navbar';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';

@Component({
  imports: [Header, TopNavbar, RouterOutlet],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
